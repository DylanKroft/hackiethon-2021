import styled from 'styled-components'
import MyButton from './MyButton'
import React, { useState, useEffect } from 'react';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import Taskbar from './Taskbar';
import Tooltip from "@material-ui/core/Tooltip";

const Task = ({taskText, id, em, task, deleted_shit, name, isFriend}) => {
    
    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
        configureFrame({limit: 20 });
        sync();
      }, []);

    const [done, setDone] = useState(false);

    const completeTask = () => {

        if (!done){
            deleted_shit.splice(id, 1, task[id]);
            setDone(true)
        } else {
            deleted_shit.splice(id, 1, "");
            setDone(false)
        }     

    }

    const grow = () => {

        let modified = []

        for (let i = 0; i < task.length; i ++){

            if ((i != id || !done) && task[i] != ""){
                modified.push(task[i])
            }
        }

        let newString = "";
        
        for (let i = 0; i < modified.length; i++){

            if (newString.length == 0){
                newString = modified[i] + ","
            } else if ( i == modified.length - 1) {
                newString += modified[i];
            } else {
                newString += modified[i] + ",";
            }
        }
        console.log(newString)
            if (done){
                name.description = newString;
                name.score += 1;

                if (name.score < 0){
                    name.score = 0;
                }
                sync();
            }
            setDone(false);
        }


        if (!isFriend){
            return (
                <Container d={done}>
                    <CompleteButton d={done}>
                    <Tooltip
                title="Click here to mark the task as complete."
                placement="top"
            >
            <Circle onClick={completeTask} d={done}/>
            </Tooltip>
                    </CompleteButton>
                    <Text d={done}>{taskText}</Text>
                    <But d={done}>
                    <Tooltip
                title="Click here to mark a submit a task and grow bamboo."
                placement="top"
            >
                        <Circle onClick={grow}/>  
            </Tooltip>
                    </But>  
                    
                </Container> 
            )
        }

        else {
            return (
                <Container d={done}>
                    <CompleteButton d={done}>
                    </CompleteButton>
                    <Text d={done}>{taskText}</Text>
                    <But d={done}>
                    </But>
                </Container> 
            )

        }

}

export default Task

const But = styled.div`
    position: relative;
    height: 100%;
    width: 60px;
    background-color: none;
    border-radius: 0 10px 10px 0;
    ${({d}) => d && 'background-color: rgba(119, 221, 119, 1);'}
`


const Container = styled.div`
    width: 100%;
    height: 70px;       
    display: flex;
    background-color: rgba(41, 179, 158, 0.5);
    margin-bottom: 5px;
    justify-content: space-between;
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
    object-fit: cover;
    overflow: hidden;

    
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
