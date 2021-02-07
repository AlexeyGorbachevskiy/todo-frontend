import React from 'react'
import styled from "styled-components";
import {COLORS} from "../constants/styles";
import '../assets/styles/components/_task.scss';



const TaskWrapper = styled.div`
  width: 200;
  min-height: 20px;
  border-radius: 15px;
  background-color: ${({backgroundColor}: TaskWrapperProps) => backgroundColor || COLORS.aqua};
`;
export const Task = ({}:TaskProps) => {
    return (
       <TaskWrapper className="task">

           <div className="task-title">
               Tran Mau Tri Tam
           </div>
           <div className="task-label">
               <div className="task-dot" />
               <div className="task-dot" />
               <div className="task-dot" />
           </div>

       </TaskWrapper>
    )
}


type TaskProps = {

}

type TaskWrapperProps = {
    backgroundColor?: string;
    className?: string;
}
