import React from 'react'
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  cursor: not-allowed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Loader = ({style}: any) => {
    return (
        <LoaderWrapper style={style}>
            <svg width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#0d9722" strokeWidth="6" r="35"
                        strokeDasharray="164.93361431346415 56.97787143782138">
                    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s"
                                      values="0 50 50;360 50 50" keyTimes="0;1"/>
                </circle>
            </svg>
        </LoaderWrapper>
    )
}

