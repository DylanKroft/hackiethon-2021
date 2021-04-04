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
    let deleted_shit = []

    //gets description for username
    if(loggedIn) {
        for (let  i = 0; i < Frame().length; i++) {
            if (Frame()[i].name == email) {
                var name = Frame()[i];
                tasks = Frame()[i].description.split(",")
            }
        }

        for (let i = 0; i < tasks.length; i ++){
            deleted_shit[i] = "";
        }
    
    }

    if (loggedIn) {
        return (
            <Container>
            {tasks.map((ele,i) => (
                    <Task name={name} em={email} taskText={ele} id={i} task={tasks} deleted_shit={deleted_shit} />
                ))}

            </Container>
        )
    }
}

export default Taskbar

const Container = styled.div`
    width: 100%;
    padding: 10px;
    max-height: 600px;
    min-width: 300px;
    max-width: 500px;
    margin: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    justify-content: flex-end;
    flex-direction: column;    
`


