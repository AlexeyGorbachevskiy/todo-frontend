import React from 'react'
import styled from 'styled-components';
import {COLORS} from "../constants/styles";
import logo from "../assets/images/logo.jpg";
import left from "../assets/images/left.png";
import right from "../assets/images/right.png";
import '../assets/styles/components/_container.scss';

const CustomContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${()=>COLORS.base};
`;

export const Container = ({children}: { children: JSX.Element }) => {
    return (
        <CustomContainer className="container">
            <div className="logo-wrapper">
                ToDo App
                <img className="logo" src={logo} alt="Logo"/>
            </div>

            {children}
            <img className="left" src={left} alt="Left image"/>
            <img className="right" src={right} alt="Right image"/>
        </CustomContainer>
    )
}
