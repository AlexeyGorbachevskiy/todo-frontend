import React, {ChangeEvent, useEffect, useRef, useState} from 'react'
import styled from "styled-components";
import {COLORS} from "../constants/styles";
import '../assets/styles/components/_task.scss';
import {Popup} from "./Popup";
import {Input} from "./Input";
import {onAddNewTask, onRemoveTask, onRenameTask} from "../@/todos/model";
import {renameTaskFx} from "../api/todo-api";


const TaskWrapper = styled.div`
  width: 200;
  min-height: 20px;
  border-radius: 15px;
  background-color: ${({backgroundColor}: TaskWrapperProps) => backgroundColor || COLORS.aqua};
`;
export const Task = ({id, isAddTaskPending, todoId, name, setAddTaskPending, isCompleted}: TaskProps) => {

    const inputRef = useRef<any>();

    const [input, setInput] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [allowRenaming, setAllowRenaming] = useState(false);
    const [renameTaskPending, setRenameTaskPending] = useState(false);

    useEffect(() => {
        if (renameTaskPending && name) {
            setInput(name);
        }
    }, [renameTaskPending]);

    useEffect(() => {
        if (isCompleted) {
            setCheckbox(isCompleted)
        }
    }, [isCompleted])

    const onInputBlurEnter = () => {
        if (isAddTaskPending) {
            addNewTask()
        } else if (renameTaskPending && !allowRenaming) {
            inputRef.current.focus();
        } else if (renameTaskPending && allowRenaming) {
            onRenameTask({name: input, todoId, taskId: id});
        }
    }
    const removeTask = () => {
        onRemoveTask({todoId, id});
    }
    const cancelTaskAdding = () => {
        if (isAddTaskPending) {
            setAddTaskPending!(false);
        }
        if (renameTaskPending) {
            setRenameTaskPending(false)
        }

    }

    const renameTask = () => {
        setRenameTaskPending(true);
    }
    let taskPopupItems = [{name: 'Rename', handler: renameTask}, {name: 'Move to'}, {
        name: 'Remove',
        handler: removeTask
    }];
    if (!id || renameTaskPending) {
        taskPopupItems = [{name: 'Cancel', handler: cancelTaskAdding}, ...taskPopupItems]
    }


    const [isOpenPopup, setPopupOpen] = useState(false);
    const onOpenClosePopup = () => {
        setPopupOpen(!isOpenPopup);
        document.removeEventListener('click', outsideClickListener);
    }

    const addNewTask = () => {
        if (input.trim()) {
            onAddNewTask({name: input, todoId});
        } else {
            inputRef.current.focus();
        }
    }

    useEffect(() => {
        document.addEventListener('click', outsideClickListener);
    }, [isOpenPopup]);

    const outsideClickListener = (e: any) => {
        const popups = document.querySelectorAll('.popup');

        if (popups && isOpenPopup) {
            let needClose = true;
            popups.forEach(popup => {
                if (popup.contains(e.target)) {
                    needClose = false;
                }
            })
            if (needClose) {
                setPopupOpen(false);
                document.removeEventListener('click', outsideClickListener);
            }

        }
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (renameTaskPending && e.target.value.trim()) {
            setAllowRenaming(true)
        }
        setInput(e.target.value)
    }

    renameTaskFx.done.watch((result) => {
        if (result && result.result && result.result.allTasks.length) {
            setRenameTaskPending(false);
        }
    });

    const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        onRenameTask({name, isCompleted: e.target.checked, input, todoId, taskId: id});
        setCheckbox(e.target.checked)
    }
    return (
        <TaskWrapper style={checkbox ? {opacity: '0.3'} : {}} className="task">

            <Popup className='popup' isOpen={isOpenPopup} items={taskPopupItems}/>
            <div className='task-body' style={checkbox ? {textDecoration: 'line-through', color: 'red'} : {}}>
                {isAddTaskPending || renameTaskPending ?
                    <Input autoFocus
                           className="task-title__input"
                           type="text"
                           value={input}
                           onChange={onInputChange}
                           onBlur={onInputBlurEnter}
                           onEnter={onInputBlurEnter}
                           inputRef={inputRef}
                    />
                    :
                    <div className="task-title">
                        {name}
                    </div>
                }
                <input checked={checkbox} onChange={onCheckboxChange} className='checkbox' type="checkbox"/>
            </div>
            <div className="task-label" onClick={onOpenClosePopup}>
                <div className="task-dot"/>
                <div className="task-dot"/>
                <div className="task-dot"/>
            </div>

        </TaskWrapper>
    )
}


type TaskProps = {
    id?: string
    isAddTaskPending?: boolean
    todoId?: string
    name?: string
    setAddTaskPending?: (isPending: boolean) => void
    isCompleted?: boolean | null
}

type TaskWrapperProps = {
    backgroundColor?: string;
    className?: string;
}
