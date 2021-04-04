import styled from 'styled-components'
import MyButton from './MyButton.js';
import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import LogoutButton from './LogoutButton.js'
let buttonText = "Add Task"

const Header = ({name, usrEmail, log}) => {

    const [showAdd, setShowAdd] = useState(false);

    const handleClick = () => {
        setShowAdd(!showAdd);

        if(showAdd) {
            buttonText = "Add Task";
        } else {
            buttonText = "Close";
        }
    }

    console.log("header email: ", usrEmail);
    
    return (
        <Container>
            {showAdd && <AddTask email={usrEmail} loggedIn={log} />}
            <Heading>{name}'s Tasks</Heading>
            <Buttonbox>
                <MyButton ButtonText={buttonText} onSetAdd = {handleClick}/>
                <LogoutButton/>
            </Buttonbox>

        </Container>
    )
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
    min-width: 250px;
    height: 100%;
    line-height: 5em;
    color: #29b39e;
    text-align: left;
`

const Buttonbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`