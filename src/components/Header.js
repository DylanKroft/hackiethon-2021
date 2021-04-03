import React from 'react'
import styled from 'styled-components'
import MyButton from './MyButton.js';

const Header = () => {
    return (
        <Container>
            <Heading>My Tasks</Heading>
            <Buttonbox>
                <MyButton ButtonText={"Add Task"}/>
                <MyButton ButtonText={"Challenge"}/>
            </Buttonbox>

        </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 100px;     
    padding: 0;
    margin: 0;
    background-color: #FFF4D1; 
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Heading = styled.div`
    padding-left: 30px;
    font-size: 3em;
    font-weight: 800;
    width: 30%;
    min-width: 250px;
    height: 100%;
    line-height: 2em;
    color: #ffb347;
`

const Buttonbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-right: 10px;
`