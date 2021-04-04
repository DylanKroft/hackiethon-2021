import styled from 'styled-components'
import MyButton from './MyButton'
import React, { useState, useEffect } from 'react';

const Task = ({taskText, id, em}) => {

    const [done, setDone] = useState(false);


    const completeTask = () => {
        setDone(!done)
        console.log(done);
    }

    return (
        <Container d={done}>
            <CompleteButton><Circle onClick={completeTask} d={done}/></CompleteButton>
            <Text d={done}>{taskText}</Text>
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
    ${({d}) => d && 'background-color: rgba(41, 179, 158, 1);'}

`

const Text = styled.div`
    font-size: 1.25em;
    color: white;
    padding: 0px; 
    margin: 0px;
    line-height: 3.4em;
    ${({d}) => d && '  text-decoration: line-through;'}

`

const Circle = styled.div`
    width: 30px;
    height: 30px;
    border: 1.5px solid white;
    border-radius: 500px;
    position: absolute;
    z-index: 10;
    left: 15px;
    top: 20px;
    
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