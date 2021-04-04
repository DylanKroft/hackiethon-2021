import React, { useState, useEffect } from 'react';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import styled from 'styled-components'
import './AddFriend1.css'
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

    
    const DeleteFriend = () => {
        setInputValue("");
        setFriendTasks([]);
        setAddedValue(false);
        setFriendName("");
    }
    
    const addFriend = (e) => {

        e.preventDefault();

        for (let i = 0; i < Frame().length; i++){

            if (inputValue == Frame()[i].name){
                let friendEmail = Frame()[i].name;
                setAddedValue(true);
                setFriendTasks(friendEmail);
                setFriendName(Frame()[i].realname)
            }
        }
        setInputValue("");
    } 

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
            <>
                <Profile d={DeleteFriend} usrName={friendName} usrEmail={friendEmail} loggedIn={true} isFriend={true}/>
            </>
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
    justify-content: center;
    margin-left: 22%;


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
