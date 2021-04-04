import styled from 'styled-components'
import MyButton from './MyButton'
import React, { useState, useEffect } from 'react';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import Taskbar from './Taskbar';


const Task = ({taskText, id, em, task, deleted_shit, name}) => {

    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
        configureFrame({limit: 20 });
        sync();
      }, []);

    var ID = id;
    const [done, setDone] = useState(false);

    // console.log(task)
    // console.log(deleted_shit)

    const completeTask = () => {
 
        if (!done) {
            deleted_shit.splice(id, 1, task[id])
            task.splice(id, 1, "")
            setDone(true)
        } 
        else {
            console.log(task[id])
            task.splice(id, 1, deleted_shit[id])
            deleted_shit.splice(id, 1, "")
            setDone(false)
        } 
        let modifiedDescription = change_description(task);
        name.description = modifiedDescription;
        sync();
    }

    console.log(name)



    function change_description( array ){

        let newString = "";
        
        for (let i = 0; i < array.length; i++){
            if (array[i] != "") {

                if (newString.length == 0){
                    newString = array[i] + ",";
                } else {
                    newString += array[i] + ",";
                }
            }
        }
        console.log("stirng changed: ", newString)
        return newString;
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