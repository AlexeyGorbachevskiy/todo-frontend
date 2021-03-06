import React, {ChangeEvent} from 'react'
import styled from "styled-components";
import {COLORS} from "../constants/styles";
import '../assets/styles/components/_popup.scss';

export const PopupWrapper = styled.input`
  visibility: hidden;
  cursor:pointer;
  width: 15px;
  height: 15px;
 
 
`;
export const Popup = ({}: PopupProps) => {
    return (
        <PopupWrapper className="popup-wrapper">
            dsfsdf
        </PopupWrapper>
    )
}


type PopupProps = {

}

