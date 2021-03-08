import React, {Fragment} from 'react'
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
export const Popup = ({isOpen, className, items}: PopupProps) => {
    return (
        <PopupWrapper className={className} isOpen={isOpen} items={items}>
            {
                items!.map((item, index) =>
                    (
                        <Fragment key={index}>
                            <div className='todo-popup-btn' onClick={item.handler}>{item.name}</div>
                            {
                                index!==items!.length-1 && <Separator/>
                            }
                        </Fragment>
                    )
                )
            }
        </PopupWrapper>
    )
}


type PopupProps = {
    className: string
    isOpen?: boolean
    items?: Array<any>
}

type PopupWrapperPropsType = {
    isOpen?: boolean
    items?: Array<any>
}
