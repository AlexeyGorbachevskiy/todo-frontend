import React from 'react'
import styled from 'styled-components';
import {COLORS} from "../constants/styles";

const CustomContainer = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  min-height: calc(100vh-120px);
  font-family: "Comic Sans MS", sans-serif;
  background-color: ${({backgroundColor}: CustomContainerProps) => backgroundColor || COLORS.base};
`;

export const Container = ({children, backgroundColor, className}: { children: any, backgroundColor?: string, className?: string }) => {
    return (
        <CustomContainer className={className} backgroundColor={backgroundColor}>
            {children}
        </CustomContainer>
    )
}


type CustomContainerProps = {
    backgroundColor?: string
    className?: string
}
