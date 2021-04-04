import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react';


const Home = ({showTaskAdd}) => {


    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div>
                <Main>
                    <Profile usrName={user.name} usrEmail={user.email} loggedIn = {isAuthenticated} displayAddTask={showTaskAdd}/> 
                </Main>
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
  background-color: #eaddb6;
`