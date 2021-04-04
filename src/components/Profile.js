import styled from 'styled-components'
import Taskbar from './Taskbar.js';
import Header from './Header.js';
import GrowPanel from './GrowPanel.js';
import AddTask from './AddTask.js';
import React, { useState, useEffect } from 'react';

const Profile = ({d, usrName, usrEmail, loggedIn, isFriend}) => {
    
    return (
        <Container>
            <Header del={d} log={loggedIn} name={usrName} usrEmail={usrEmail} friend={isFriend}/>
            <TaskSection>
                <Taskbar name={usrName} email={usrEmail} loggedIn={loggedIn} friend={isFriend}/>
                <GrowPanel email={usrEmail} loggedIn={loggedIn}/>
            </TaskSection>
        </Container>
    )
}

export default Profile

const Container = styled.div`
    width: 50%;
    height: 100%;
    min-width: 500px;
    justify-content: space-space-around;
    align-items: center;
    
    @media screen and (max-width: 1000px) {
     {
         width: 100%;
    }
}
`
const TaskSection = styled.div`
    width: 95%;
    display: flex;
    border: 2px solid white;
    border-radius: 15px;
    height: 85%;
    margin-left: 15px;
`