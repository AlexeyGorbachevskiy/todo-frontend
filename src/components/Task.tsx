import React, {ChangeEvent, DragEvent, useEffect, useRef, useState} from 'react'
import styled from "styled-components";
import {COLORS} from "../constants/styles";
import '../assets/styles/components/_task.scss';
import {Popup} from "./Popup";
import {Input} from "./Input";
import {$isRequestPending, $todos, onAddNewTask, onDragDropTask, onRemoveTask, onRenameTask} from "../@/todos/model";
import {renameTaskFx} from "../api/todo-api";
import {useStore} from "effector-react";

const TaskWrapper = styled.div`
  cursor: ${({isRequestPending}: TaskWrapperProps) => isRequestPending ? 'initial' : 'pointer'};
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
    let taskPopupItems = [{name: 'Rename', handler: renameTask}, {
        name: 'Remove',
        handler: removeTask
    }];
    if (!id || renameTaskPending) {
        taskPopupItems = [{name: 'Cancel', handler: cancelTaskAdding}]
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


    const dragStartHandler = (e: DragEvent<HTMLDivElement>, todoId: string | undefined | null, id: string | undefined | null) => {
        const target = e.target as HTMLDivElement;

        setTimeout(function () {
            target.style.display = 'none';
        }, 0);

        if (todoId) {
            e.dataTransfer.setData('currentTodoId', todoId);
        }
        if (id) {
            e.dataTransfer.setData('currentTaskId', id);
        }
    }

    const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    const dragTaskOverHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        // const target = e.target as HTMLDivElement;
        // if (e.currentTarget === target) return
        // setShowShadow(true);
    }

    const dragEnterHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const target = e.target as HTMLDivElement;
        if (e.currentTarget === target) return
        setShowShadow(true);

    }

    const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
        setShowShadow(false);
    }

    const dropHandler = (e: DragEvent<HTMLDivElement>, targetTodoId: string | null | undefined, targetTaskId: string | null | undefined) => {
        e.preventDefault();
        setShowShadow(false);
        const currentTodoId = e.dataTransfer.getData('currentTodoId');
        const currentTaskId = e.dataTransfer.getData('currentTaskId');

        const todos = $todos.getState();
        let currentTodoIndex = todos.findIndex(el => el.id === currentTodoId);
        let currentTaskIndex = todos[currentTodoIndex].tasks.findIndex((el: any) => el.id === currentTaskId);
        let targetTodoIndex = todos.findIndex(el => el.id === targetTodoId);
        let targetTaskIndex = todos[targetTodoIndex].tasks.findIndex((el: any) => el.id === targetTaskId);

        const currentTask = todos[currentTodoIndex].tasks.find((el: any) => el.id === currentTaskId);


        // all arrays are reversed now, need to get actual ids
        ;(function reverseIds() {
            targetTaskIndex = todos[targetTodoIndex].tasks.length - 1 - targetTaskIndex;
            currentTaskIndex = todos[currentTodoIndex].tasks.length - 1 - currentTaskIndex;
        }())

        if (currentTodoId === targetTodoId) {
            if (currentTaskIndex < targetTaskIndex) {
                targetTaskIndex -= 1
            }
        }

        targetTaskIndex += 1;

        onDragDropTask({
            currentTodoId,
            targetTodoId,
            currentTaskId,
            targetTaskIndex,
            name: currentTask.name,
            description: currentTask.description,
            isCompleted: currentTask.isCompleted
        })
    }

    const dragEndHandler = (e: DragEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if (e.dataTransfer.dropEffect === 'none') {
            target.style.display = 'flex';
        }

        setShowShadow(false);
    }
    const isRequestPending = useStore($isRequestPending);
    const [isShowShadow, setShowShadow] = useState(false);

    return (
        <>
            {
                <div
                    style={isShowShadow ? {display: 'flex'} : {display: 'none'}}
                    className='task-shadow'
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragLeave={dragLeaveHandler}
                    onDrop={(e) => dropHandler(e, todoId, id)}
                />
            }
            <TaskWrapper
                style={checkbox ? {backgroundColor: 'rgba(35,91,89, 0.5)'} : {}}
                className="task"
                draggable={!isRequestPending && !isAddTaskPending && !renameTaskPending}
                onDragStart={(e) => dragStartHandler(e, todoId, id)}
                onDragEnter={dragEnterHandler}
                onDragOver={(e) => dragTaskOverHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                isRequestPending={isRequestPending}
            >

                <Popup className='popup'
                       isOpen={isOpenPopup}
                       items={taskPopupItems}
                       renameTaskPending={renameTaskPending}
                       isAddTaskPending={isAddTaskPending}
                       customOffset={'35px'}
                />
                <div className='task-body'>
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
                        <div className="task-title"
                             style={checkbox ? {textDecoration: 'line-through', color: 'red'} : {}}>
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
        </>
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
    isRequestPending?: boolean
}
