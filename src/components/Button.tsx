import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import styled from 'styled-components';
import {COLORS} from "../constants/styles";

const CustomButton = styled.button`
   width: 40%;
   height: 35px;
   margin: 0 1.2em;
   background-color: ${()=>COLORS.green};
   border: 0px;
   color: #fff;
   border-radius: 3px;
   transition: background-color .2s ease-in-out 0s, border-color .2s ease-in-out 0s;
   font-weight: 700;
   font-size: 14px;
   outline: none;
   
  &:hover {
    opacity: 0.9;
  }
`;

export const Button =
    ({
         placeholder,
         id,
         type,
         name,
         className,
         value,
         onClick,
         children
     }: InputPropsType) => {
        return (
            <CustomButton
                placeholder={placeholder}
                id={id}
                type={type}
                name={name}
                className={className}
                value={value}
                onClick={onClick}
            >{children}</CustomButton>
        )
    }

export type InputPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & { };
