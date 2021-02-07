import React, {ChangeEvent} from 'react'
import styled from "styled-components";
import {COLORS} from "../constants/styles";
import '../assets/styles/components/_radio.scss';

export const RadioWrapper = styled.input`
  visibility: hidden;
  cursor:pointer;
  width: 15px;
  height: 15px;
  color: ${({}: RadioWrapperProps) => COLORS.green};
  background-color: ${({backgroundColor}: RadioWrapperProps) => backgroundColor || COLORS.aqua};
  
  &:after {
        width: 14px;
        height: 14px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #ffffff;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }

    &:checked:after {
        width: 14px;
        height: 14px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #ffa500;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }
 
`;
export const Radio = ({name, checked, value, id, onChange}: RadioProps) => {
    return (
        <RadioWrapper
            className="radio"
            type="radio"
            name={name}
            checked={checked}
            value={value}
            id={id}
            onChange={onChange}
        />
    )
}


type RadioProps = {
    id?: string
    name: string
    checked?: boolean
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}

type RadioWrapperProps = {
    id?: string
    backgroundColor?: string
    className?: string
    name: string
    checked?: boolean
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}
