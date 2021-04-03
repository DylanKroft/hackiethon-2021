import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import Profile from './Profile'
import styled from 'styled-components'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton'

const Home = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <Main>
                    <Profile />  
                    <Profile />  
                </Main>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <JSONPretty data={user} />
                {/* {JSON.stringify(user, null, 2)} */}
            </div>
        )
        !=isAuthenticated && (
            <div>
                <LoginButton />
                <LogoutButton />
            </div>
        )
     )      
}



export default Home


const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`