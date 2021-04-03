import './App.css';
import Profile from './components/Profile.js';
import { Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components'

function App() {
  return (
    <Main>
      <Profile />  
      <Profile />  
    </Main>
  );
}

export default App;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;

`
