import './App.css';
import LogoutButton from './components/LogoutButton'
import Home from './components/Home'
import LoginButton from './components/LoginButton';
import styled from 'styled-components'
import React, { useState, useEffect } from 'react';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import ebconfig from './ebconfig';
import { useAuth0 } from '@auth0/auth0-react';
import bg from'./bamboo/Login.png';

function App() {

  let a = "Bamboo"
  
  const {isAuthenticated} = useAuth0();
   if (isAuthenticated) {
     return(
      <Main>
        <EasybaseProvider ebconfig={ebconfig}>
          <Home />
            <Footer>
          </Footer>
        </EasybaseProvider>
      </Main>
     )
   }
   else{
     return(
     <LoginBox>
        <Container>
          <h1 class = "logo"> {a} </h1>
          <LoginButton />
        </Container>
     </LoginBox>
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
  height: 100px;
  width: 80px;
  display: flex;
  align-items: center;
`

const LoginBox = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${bg});
    background-size: cover;

    @media screen and (max-width: 800px) {
     {
    }

`

const Container = styled.div`
-webkit-box-shadow: 0px 0px 11px -4px rgba(71,71,71,1);
-moz-box-shadow: 0px 0px 11px -4px rgba(71,71,71,1);
box-shadow: 0px 0px 11px -4px rgba(71,71,71,1);
    width: 300px;
    height: 400px;
    position: relative;
    left: calc(50% - 150px);
    top: calc(50% - 200px);
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    background: rgb(240,216,144);
background: linear-gradient(355deg, rgba(240,216,144,1) 42%, rgba(186,147,23,1) 83%);


`
