import styled from 'styled-components'
import MyButton from './MyButton.js';
import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import LogoutButton from './LogoutButton.js'
import DisplayFriend from './DisplayFriend.js';
import AddChallenge from './AddChallenge.js'

let buttonText = "Add Task"
let bText = "Challenge"

const Header = ({del, name, usrEmail, log, friend}) => {

    console.log("l14: ", usrEmail);

    const [showChal, setShowChal] = useState(usrEmail);
    const [showAdd, setShowAdd] = useState(false);
    const handleChal =() => {
        if(showAdd == false) {
            setShowChal(!showChal);

            if(showChal) {
                bText = "Challenge";
            } else {
                bText = "Close";
            }
        } 
    }

    const handleClick = () => {
        if(showChal == false) {

            setShowAdd(!showAdd);

            if(showAdd) {
                buttonText = "Add Task";
            } else {
                buttonText = "Close";
            }
        }
    }
    
    if (!friend) {
        return (
            <Container>
                {showAdd && <AddTask displayAdd={handleClick} email={usrEmail} loggedIn={log} />}
                {showChal && <AddChallenge/>}
                <Heading>{name}'s Tasks</Heading>
                <Buttonbox>
                    <MyButton ButtonText={buttonText} onSetAdd={handleClick}/>
                    <MyButton ButtonText={bText} onSetAdd={handleChal}/>
                    <LogoutButton/>
                </Buttonbox>
    
            </Container>
        )
    } 
    else {
        return (
            <Container>
                <Heading>{name}'s Tasks</Heading>
                {true && <AddChallenge friendEmail={usrEmail}/>}
                <But onClick={del}>
                    Abandon              
                </But>
            </Container>
        )
    }
  
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 100px;     
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Heading = styled.div`
    padding-left: 25px;
    font-size: 1.5em;
    font-weight: 800;
    width: 50%;
    min-width: 220px;
    height: 100%;
    line-height: 4.2em;
    color: #29b39e;
    text-align: left;
    overflow-x: hidden;
`

const Buttonbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const But = styled.div`
    width: 80px;
    font-weight: 600;
    text-align: center;
    padding: 10px;
    color: white;
    border-radius: 5px;
 
    :hover {
        cursor: pointer;
        background: #ffb11b;
        border-radius: 8px;
    }


    background-color: #ffa500;

`