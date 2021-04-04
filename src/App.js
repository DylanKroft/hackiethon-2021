import './App.css';
import LogoutButton from './components/LogoutButton'
import Home from './components/Home'
import LoginButton from './components/LoginButton';
import styled from 'styled-components'
import React, { useState, useEffect } from 'react';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import ebconfig from './ebconfig';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  
  const {isAuthenticated} = useAuth0();
   if (isAuthenticated) {
     return(
      <Main>
        <EasybaseProvider ebconfig={ebconfig}>
          <Home />
            <Footer>
            <LogoutButton/>
          </Footer>
        </EasybaseProvider>
      </Main>
     )
   }
   else{
     return(
     <div>
      <LoginButton />
     </div>
     )
   }
}

export default App;

const Main = styled.div`
  position: absolute;
  top: 0;
`
const Footer = styled.div`
  position: fixed;
  bottom: 0;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
`