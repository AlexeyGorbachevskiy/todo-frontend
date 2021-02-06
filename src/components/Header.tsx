import React from 'react'
import styled from 'styled-components';
import {COLORS} from "../constants/styles";

const CustomHeader = styled.div`
  width: 100%;
  height: 80px;
  background: ${({backgroundColor}:CustomContainerProps) => backgroundColor || COLORS.base};
`;

export const Header = ({children, backgroundColor, className}: { children?: any,backgroundColor?:string, className?:string }) => {

    return (
        <CustomHeader backgroundColor={backgroundColor} className={className}>
            {children}
        </CustomHeader>
    )
}


type CustomContainerProps = {
    backgroundColor?: string
}
