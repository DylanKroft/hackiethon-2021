import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile'
import styled from 'styled-components'

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