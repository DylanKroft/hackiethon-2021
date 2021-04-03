<<<<<<< HEAD
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <JSONPretty data={user} />
                {/* {JSON.stringify(user, null, 2)} */}
            </div>
        )
     )      
}

export default Profile
=======
import styled from 'styled-components'
import Taskbar from './Taskbar.js';
import Header from './Header.js';

const Profile = () => {
    return (
        <Container>
            <Header />
            <TaskSection>
                <Buffer />
                    <Taskbar />
                <Buffer />
            </TaskSection>
        </Container>
    )
}

export default Profile

const Container = styled.div`
    width: 50%;
    height: 100%;
    min-width: 400px;
    min-height: 600px;
    margin: 0;
    padding: 0;
    background-color: blue;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px) {
     {
         width: 100%;
    }
}
`
const TaskSection = styled.div`
    width: 100%;
    background-color: orange;
    display: flex;
    flex-direction: column;
`
const Buffer = styled.div`
    width: 10%;
    flex-shrink: 100;
`

>>>>>>> 1b8494b872933c97d9427da77947bcd58a2aef09
