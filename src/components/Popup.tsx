import React, {Fragment} from 'react'
import styled from "styled-components";
import {COLORS} from "../constants/styles";
import '../assets/styles/components/_popup.scss';

export const PopupWrapper = styled.div`
  display: ${({isOpen}: PopupWrapperPropsType) => isOpen ? 'flex' : 'none'};
  position: absolute;
  z-index: 1000;
  top: 14px;
  right: ${({customOffset}) => customOffset ? '35px' : '-90px'};
  
  width: 100px;
  min-height: ${({renameTodoPending, isAddTaskPending, renameTaskPending}: PopupWrapperPropsType) => (renameTodoPending || isAddTaskPending || renameTaskPending) ? '40px' : '80px'};
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
export const Popup = ({isOpen, className, items, renameTodoPending, isAddTaskPending, renameTaskPending,customOffset }: PopupProps) => {
    return (
        <PopupWrapper className={className} isOpen={isOpen} items={items} renameTodoPending={renameTodoPending}
                      isAddTaskPending={isAddTaskPending} renameTaskPending={renameTaskPending}
                      customOffset={customOffset}
        >
            {
                items!.map((item, index) =>
                    (
                        <Fragment key={index}>
                            <div className='todo-popup-btn' onClick={item.handler}>{item.name}</div>
                            {
                                index !== items!.length - 1 && <Separator/>
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
    renameTodoPending?: boolean
    isAddTaskPending?: boolean
    renameTaskPending?: boolean
    customOffset?: string

}

type PopupWrapperPropsType = {
    isOpen?: boolean
    items?: Array<any>
    renameTodoPending?: boolean
    isAddTaskPending?: boolean
    renameTaskPending?: boolean
    customOffset?: string
}
