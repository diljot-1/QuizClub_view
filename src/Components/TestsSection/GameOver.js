import React from 'react'
import styled from 'styled-components'


const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const GameOver = ({pts}) => {

    const refreshPage = () => window.location.reload();

    return (
        <>
            <Title>Test Completed</Title>
            <Points>You did {pts} out of 5!</Points>
            
        </>
    )
}

export default GameOver