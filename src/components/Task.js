import styled from 'styled-components'
import MyButton from './MyButton'
import React, { useState, useEffect } from 'react';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import Taskbar from './Taskbar';
import ReactTooltip from 'react-tooltip';

const Task = ({taskText, id, em, task, deleted_shit, name}) => {
    
    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
        configureFrame({limit: 20 });
        sync();
      }, []);

    const [done, setDone] = useState(false);

    const completeTask = () => {


        console.log("Before", task)
        console.log("Before: ", deleted_shit)

        if (!done){
            deleted_shit.splice(id, 1, task[id]);
            setDone(true)
        } else {
            deleted_shit.splice(id, 1, "");
            setDone(false)
        }     
        console.log("after", task)     
        console.log("after:" , deleted_shit) 
    }

    const grow = () => {

        let modified = []

        console.log("to be modified: ", task);
        console.log("modified id ", id)

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
                sync();
            }
            setDone(false);
        }


        return (
            <Container d={done}>
                <CompleteButton d={done}>
                    <Circle onClick={completeTask} d={done}/>
                </CompleteButton>
                <Text d={done}>{taskText}</Text>
                <But d={done}>
                    <Circle onClick={grow}></Circle>
                    </But>
            </Container> 
        )
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