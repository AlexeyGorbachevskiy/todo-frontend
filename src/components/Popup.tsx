import React from 'react'
import styled from "styled-components";
import {COLORS} from "../constants/styles";
import '../assets/styles/components/_popup.scss';

export const PopupWrapper = styled.div`
  display: ${({isOpen}: PopupWrapperPropsType) => isOpen ? 'flex' : 'none'};
  position: absolute;
  z-index: 1000;
  top: 15px;
  right: -90px;
  
  width: 100px;
  height: 100px;
  background-color: ${() => COLORS.base};
  border: 2px solid #262631;
  border-radius: 10px;
  
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Separator = styled.div`
  width: 80px;
  height: 1px;
  background-color: #262631;
`;
export const Popup = ({isOpen, className}: PopupProps) => {
    return (
        <PopupWrapper className={className} isOpen={isOpen}>
            <div className='todo-popup-btn'>Rename</div>
            <Separator />
            <div className='todo-popup-btn'>Move to</div>
            <Separator />
            <div className='todo-popup-btn'>Remove</div>
        </PopupWrapper>
    )
}


type PopupProps = {
    className: string
    isOpen?: boolean
}

type PopupWrapperPropsType = {
    isOpen?: boolean
}
