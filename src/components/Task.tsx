import React, {useEffect, useRef, useState} from 'react'
import styled from "styled-components";
import {COLORS} from "../constants/styles";
import '../assets/styles/components/_task.scss';
import {Popup} from "./Popup";
import {Input} from "./Input";
import {onAddNewTask, onRemoveTask} from "../@/todos/model";


const TaskWrapper = styled.div`
  width: 200;
  min-height: 20px;
  border-radius: 15px;
  background-color: ${({backgroundColor}: TaskWrapperProps) => backgroundColor || COLORS.aqua};
`;
export const Task = ({id, isAddTaskPending, todoId, name}: TaskProps) => {

    const inputRef = useRef<any>();

    const [input, setInput] = useState('');
    const removeTask = () => {
        onRemoveTask({todoId, id});
    }
    const taskPopupItems = [{name: 'Rename'}, {name: 'Move to'}, {name: 'Remove', handler: removeTask}];
    const [isOpenPopup, setPopupOpen] = useState(false);
    const onOpenClosePopup = () => {
        setPopupOpen(!isOpenPopup);
        document.removeEventListener('click', outsideClickListener);
    }

    const addNewTask = () => {
        console.log(input.trim())
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

    return (
        <TaskWrapper className="task">

            <Popup className='popup' isOpen={isOpenPopup} items={taskPopupItems}/>

            {isAddTaskPending ?
                <Input autoFocus
                       className="task-title__input"
                       type="text"
                       value={input}
                       onChange={(e) => setInput(e.target.value)}
                       onBlur={addNewTask}
                       onEnter={addNewTask}
                       inputRef={inputRef}
                />
                :
                <div className="task-title">
                    {name}
                </div>
            }
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
}

type TaskWrapperProps = {
    backgroundColor?: string;
    className?: string;
}
