import React from 'react'
import styled from 'styled-components'
import Task from './Task.js';

const Taskbar = () => {
    return (
        <Container>
            <Task />
            <Task />
            <Task />
            <Task /><Task />
            <Task /><Task />
            <Task /><Task />
            <Task /><Task />
            <Task />
        </Container>
    )
}

export default Taskbar

const Container = styled.div`
    width: 90%;
    height: 100%;
    max-height: 600px;
    max-width: 500px;
    padding: 0;     
    margin: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    justify-content: center;
    align-self: center;
    background-color: yellow;
`


