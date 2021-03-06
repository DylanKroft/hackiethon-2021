import styled from 'styled-components'
import MyButton from './MyButton.js';
import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import LogoutButton from './LogoutButton.js'
import DisplayFriend from './DisplayFriend.js';
import AddChallenge from './AddChallenge.js'
import Tooltip from "@material-ui/core/Tooltip";

let buttonText = "Add Task"
let bText = "Challenge"
var ownerEmail = "";

const Header = ({del, name, usrEmail, log, friend}) => {

    const [yesFriend, setYesFriend] = useState(friend);
    const [showChal, setShowChal] = useState(false);
    const [showAdd, setShowAdd] = useState(false);

    if (ownerEmail == "" && usrEmail != ""){
        ownerEmail = usrEmail;
    }

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
                {showAdd && <AddTask id={"addTask"} displayAdd={handleClick} email={usrEmail} loggedIn={log} />}
                <Heading>{name}'s Tasks</Heading>
                <Buttonbox>
                    <MyButton ButtonText={buttonText} onSetAdd={handleClick}/>
                    <LogoutButton/>
                </Buttonbox>
    
            </Container>
        )
    } 
    else {
        return (
            <Container>
                <Heading>{name}'s Tasks</Heading>
                <Buttonbox>

                <MyButton ButtonText={bText} onSetAdd={handleChal}/>
                {showChal && <AddChallenge friendEmail={usrEmail} ownerEmail={ownerEmail}/>}
                <Tooltip
                title="Click here to abandon your friend and be productive with another one!."
                placement="top"
            >
                <But onClick={del}> Abandon </But>
            </Tooltip>
                </Buttonbox>
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
    width: 60px;
    font-weight: 600;
    text-align: center;
    padding: 10px;
    color: white;
    border-radius: 8px;
    font-size: 0.8em;
    line-height: 1.4em;
    height: 16.6px;
    margin-right: 20px;
 
    :hover {
        cursor: pointer;
        background: #b82d13;
        border-radius: 8px;
    }
    background-color: #9a220b;
`