import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import styled from 'styled-components';
import {COLORS} from "../constants/styles";

const CustomInput = styled.input`
   max-width: 400px;
   width: 100%;
   height: 44px;
   padding: .5em;
   margin: 0 0 1.2em;
   background-color: ${({}: InputPropsType) => COLORS.lightGrey};
   border: 2px solid ${({isEmpty}: InputPropsType) => isEmpty ? 'red' : COLORS.grey};
   font-size: 14px;
   border-radius: 3px;
   transition: background-color .2s ease-in-out 0s, border-color .2s ease-in-out 0s;
 
  &:focus {
    background-color: ${() => COLORS.white};
    border-color: ${({}: InputPropsType) => COLORS.blue};
  }
`;

export const Input =
    ({
         placeholder,
         id,
         type,
         name,
         className,
         value,
         onChange,
         autoFocus,
         onBlur,
         onEnter,
         inputRef,
         style,
     }: InputPropsType) => {

        const onEnterPress = (e: any) => {
            if (e.key === 'Enter') {
                onEnter && onEnter()
            }
        }

        return (
            <CustomInput
                placeholder={placeholder}
                id={id}
                type={type}
                name={name}
                className={className}
                value={value}
                onChange={onChange}
                autoFocus={autoFocus}
                onBlur={onBlur}
                onKeyPress={onEnterPress}
                ref={inputRef}
                style={style}
            />
        )
    }

export type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { onEnter?: () => void, error?: string, inputRef?: any, isEmpty?: any, style? :any };
