import React, { useState, useEffect } from 'react';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import styled from 'styled-components'
import './AddTask.css'
import panda from'../bamboo/panda.gif';
import Task from './Task';
import Profile from './Profile';

const DisplayFriend = () => {

    const [added, setAddedValue] = useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const [friendEmail, setFriendTasks] = useState([]);
    const [friendName, setFriendName] = useState("");
    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
        configureFrame({limit: 20 });
        sync();
      }, []);

    const onChangeHandler = event => {
        setInputValue(event.target.value);
      };


    const addFriend = (e) => {

        e.preventDefault();
        console.log(inputValue);
        console.log(added)

        for (let i = 0; i < Frame().length; i++){

            if (inputValue == Frame()[i].name){
                console.log("here 31:", Frame()[i])
                let friendEmail = Frame()[i].name;
                console.log("line 36:", Frame()[i].name);
                setAddedValue(true);
                console.log("line 404004", Frame()[i])
                setFriendTasks(friendEmail);
                setFriendName(Frame()[i].realname)
            }
        }
        setInputValue("");
    } 

    console.log(added)

    if (!added){
        return (
            <Container a={added}>
            <Heading>Add Friend</Heading>
            <Panda>
                <img className="panda" src={panda} alt="loading..." />
            </Panda>
            <FormBox>
                <form onSubmit={addFriend}>
                    <input
                    type="text"
                    name="name"
                    onChange={onChangeHandler}
                    value={inputValue}
                    autocomplete="off"
                />
                    <button className="primary__btn" type="submit">
                        Invite
                    </button>
                </form>
            </FormBox>
        </Container>
    
        )

    } 
    else {
        return (
            <Display>
                <Profile usrName={friendName} usrEmail={friendEmail} loggedIn={true} isFriend={true}/>
            </Display>
        )
    }
}

export default DisplayFriend


const Panda = styled.div`
    flex: 0.8;
    height: 100%;
`

const FormBox = styled.div`
    flex: 2.2;
    width: 100%;
    display: flex;
    align-items: center;


    @media screen and (max-width: 800px) {
     {
         width: 100%;
         padding-left: 30px;

    }
`

var Container = styled.div`
    width: 45%;
    height: 500px;
    background-color: #f0d890;
    border: 2px solid white;
    position: relative;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    top: calc(50% - 225px);
    left: 2%;
    border-radius: 10px 10px 10px 10px;
    

    @media screen and (max-width: 1000px) {
     {  
        width: 90%;
        left: 5%;
        right: 5%;
        top: 0%;
    }
    }
    
    ${({a}) => a && 'display: none;'}
`

const Heading = styled.div`
    flex: 1.5;
    font-size: 2em;
    font-weight: 800;
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
`


const Display = styled.div`
    width: 100%;
    padding: 10px;
    flex: 4;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
    justify-content: flex-end;
    flex-direction: column;  
`

