import React, {ChangeEvent, useEffect, useState} from 'react'
import styled from "styled-components";
import {COLORS} from "../constants/styles";
import '../assets/styles/components/_todo.scss';
import {Task} from "./Task";
import {Radio} from "./Radio";
import {v1} from "uuid";


const TodoWrapper = styled.div`
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


    const [radio, setRadio] = useState<string>('All');
    const handleRadioChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {value} = e.target;
        setRadio(value);
    }

    return (
        <TodoWrapper className="todo">

            <div className="todo-header">
                <div className="todo-title">
                    Tran Mau Tri Tam
                </div>
                <div className="menu-icon">
                    <div className="todo-dot"/>
                    <div className="todo-dot"/>
                    <div className="todo-dot"/>
                </div>
            </div>

            <div className="todo-task-group">
                <label htmlFor={all} className="todo-label">
                    All
                    <Radio id={all} name={name} value="All" onChange={handleRadioChange} checked={radio === "All"}/>
                </label>
                <label htmlFor={progress} className="todo-label">
                    Progress
                    <Radio id={progress} name={name} value="Progress" onChange={handleRadioChange}
                           checked={radio === "Progress"}/>
                </label>
                <label htmlFor={completed} className="todo-label">
                    Completed
                    <Radio id={completed} name={name} value="Completed" onChange={handleRadioChange}
                           checked={radio === "Completed"}/>
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
