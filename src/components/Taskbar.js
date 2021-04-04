import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Task from './Task.js';
import { EasybaseProvider, useEasybase } from 'easybase-react';

const Taskbar = ({email, loggedIn}) => {

    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
      configureFrame({limit: 20 });
      sync();
    }, []);

    let tasks = [];

    //gets description for username
    if(loggedIn) {
        for (let  i = 0; i < Frame().length; i++) {
            if (Frame()[i].name == email) {
                tasks = Frame()[i].description.split(",")
            }
        }
    }
    

    if (loggedIn) {
        return (
            <Container>
            {tasks.map((ele,i) => (
                    <Task em={email} taskText={ele} id={i} />
                ))}

            </Container>
        )
    }
}

export default Taskbar

const Container = styled.div`
    border: 1px solid red;
    width: 90%;
    height: 100%;
    max-height: 650px;
    min-width: 300px;
    max-width: 500px;
    min-height: 600px;
    padding-left: 10px;     
    margin: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    justify-content: flex-end;
    flex-direction: column;
    background-color: #eaddb6;
`


