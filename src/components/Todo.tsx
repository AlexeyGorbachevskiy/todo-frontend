import React, {ChangeEvent, useEffect, useState} from 'react'
import styled from "styled-components";
import {COLORS} from "../constants/styles";
import '../assets/styles/components/_todo.scss';
import {Task} from "./Task";
import {Radio} from "./Radio";
import {v1} from "uuid";
import {Popup} from "./Popup";


const TodoWrapper = styled.div`
  position: relative;
  
  width: 280px;
  min-height: 50px;
  border-radius: 15px;
  background-color: ${({backgroundColor}: TodoWrapperProps) => backgroundColor || COLORS.base};
`;

export const Todo = ({}: TodoProps) => {
    const name = v1();
    const all = v1();
    const progress = v1();
    const completed = v1();

    const [isOpenPopup, setPopupOpen] = useState(false);
    const [radio, setRadio] = useState<string>('All');
    const onRadioChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {value} = e.target;
        setRadio(value);
    }
    const onOpenClosePopup = () => {
        setPopupOpen(!isOpenPopup);
        document.removeEventListener('click', outsideClickListener);
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
        <TodoWrapper className="todo">

            <Popup className='popup' isOpen={isOpenPopup}/>

            <div className="todo-header">
                <div className="todo-title">
                    Tran Mau Tri Tam
                </div>
                <div className="menu-icon" onClick={onOpenClosePopup}>
                    <div style={isOpenPopup ? {backgroundColor: '#fff' } : {}} className="todo-dot"/>
                    <div style={isOpenPopup ? {backgroundColor: '#fff' } : {}} className="todo-dot"/>
                    <div style={isOpenPopup ? {backgroundColor: '#fff' } : {}} className="todo-dot"/>
                </div>
            </div>

            <div className="todo-task-group">
                <label htmlFor={all} className="todo-label">
                    All
                    <Radio id={all} name={name} value="All" onChange={onRadioChange} checked={radio === "All"}
                           radioBackground={COLORS.blueMain}/>
                </label>
                <label htmlFor={progress} className="todo-label">
                    Progress
                    <Radio id={progress} name={name} value="Progress" onChange={onRadioChange}
                           checked={radio === "Progress"} radioBackground={COLORS.orange}/>
                </label>
                <label htmlFor={completed} className="todo-label">
                    Completed
                    <Radio id={completed} name={name} value="Completed" onChange={onRadioChange}
                           checked={radio === "Completed"} radioBackground={COLORS.green}/>
                </label>
            </div>

            <div className="todo-main">
                <Task/>
                <Task/>
                <Task/>
                <Task/>

                {/*No tasks added*/}
            </div>

        </TodoWrapper>
    )
}


type TodoProps = {}

type TodoWrapperProps = {
    backgroundColor?: string;
    className?: string;
}
