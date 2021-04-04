import styled from 'styled-components'
import Taskbar from './Taskbar.js';
import Header from './Header.js';
import GrowPanel from './GrowPanel.js';
import AddTask from './AddTask.js';
import React, { useState, useEffect } from 'react';

const Profile = ({usrName, usrEmail, loggedIn}) => {

    return (
        <Container>
            <Header name={usrName}/>
            <TaskSection>
                <Taskbar email={usrEmail} loggedIn={loggedIn}/>
                <GrowPanel />
            </TaskSection>
        </Container>
    )
}

export default Profile

const Container = styled.div`
    width: 50%;
    height: 100%;
    min-width: 400px;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px) {
     {
         width: 100%;
    }
}
`
const TaskSection = styled.div`
    display: flex;
    border: 2px solid white;
    border-radius: 15px;
    height: 75%;
    margin: 15px;

`