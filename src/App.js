import './App.css';
<<<<<<< HEAD
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'

function App() {
  return (
    <>
    <LoginButton />
    <LogoutButton />
    <Profile />

    </>
=======
import Profile from './components/Profile.js';
import { Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components'

function App() {
  return (
    <Main>
      <Profile />  
      <Profile />  
    </Main>
>>>>>>> 1b8494b872933c97d9427da77947bcd58a2aef09
  );
}

export default App;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;

`
