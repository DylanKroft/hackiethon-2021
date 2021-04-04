import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Task from './Task.js';
import { EasybaseProvider, useEasybase } from 'easybase-react';

const Taskbar = ({name, email, loggedIn, friend}) => {

    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
      configureFrame({limit: 20 });
      sync();
    }, []);

    let tasks = [];
    let deleted_shit = [];

    //gets description for username
    if(loggedIn) {
        for (let  i = 0; i < Frame().length; i++) {
            if (Frame()[i].name == email) {
                var name = Frame()[i];
                if (Frame()[i].description != null){
                    tasks = Frame()[i].description.split(",")
                }
            }
        }
        for (let i = 0; i < tasks.length; i ++){
            deleted_shit[i] = "";
        }
    }

    if (loggedIn && (tasks.length > 1)) {
        return (
            <Container>
            {tasks.filter(ele => ele != "" && ele != "null").map((ele,i) => (
                <Task name={name} em={email} taskText={ele} id={i} task={tasks} deleted_shit={deleted_shit} isFriend={friend} />
            ))}
            </Container>
        )
    } else {
        return (
            <>
            <Container> 
            <EmptyText>
                You do not currently have any tasks. Click "Add Task" to add a new task.
                </EmptyText>
         
                </Container>
            </>
        )
    }
}

export default Taskbar

const Container = styled.div`
    width: 100%;
    padding: 10px;
    flex: 4;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
    justify-content: flex-end;
    flex-direction: column;    
`

const EmptyText = styled.div`
    width: 75%;
    left: calc(25% - 25px);
    height: 100px;
    top: calc(50% - 50px);
    text-align: center;
    font-weight: 600;
    color: white;
    font-size: 1.5em;
    position: relative;
`


