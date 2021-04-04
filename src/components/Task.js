
import styled from 'styled-components'
import MyButton from './MyButton'
import React, { useState, useEffect } from 'react';

const Task = ({taskText, id}) => {

    const [done, setDone] = useState(false);

    const completeTask = () => {
        setDone(true)
        console.log(done);
    }

    return (
        <Container>
            <CompleteButton><Circle onClick={completeTask} /></CompleteButton>
            <Text>{taskText}</Text>
        </Container> 
    )
}

export default Task

const Container = styled.div`
    width: 100%;
    height: 70px;       
    display: flex;
    background-color: rgba(41, 179, 158, 0.5);
    margin-bottom: 5px;
    justify-content: flex-start;
    overflow-x: hidden;
    border-radius: 10px;
  
`

const Text = styled.div`
    font-size: 1.25em;
    color: white;
    padding: 0px; 
    margin: 0px;
    line-height: 3.4em;
`

const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 500px;
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    z-index: 10;
    left: 15px;
    top: 20px;

    ${({ done }) => done && `
        background-color: blue;
  `}
    
    :hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.5);
    }

    :active {    
        background-color: rgba(255, 255, 255, 1);
    }
`

const CompleteButton = styled.div`
    position: relative;
    height: 100%;
    width: 60px;
    background-color: #29B39E;
    margin-right: 10px;
`