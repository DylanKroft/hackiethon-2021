import React from 'react'
import styled from 'styled-components'
import MyButton from './MyButton.js';

const Header = ({name}) => {

    const handleClick = () => {
        console.log("Hi")
    }
    return (
        <Container>
            <Heading>{name}'s Tasks</Heading>
            <Buttonbox>
                <MyButton ButtonText= 'Add Task' onClick = {handleClick}/>
                <MyButton ButtonText= 'Challenge'  onClick = {handleClick}/>
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
    font-size: 2em;
    font-weight: 800;
    width: 50%;
    min-width: 250px;
    height: 100%;
    line-height: 3em;
    color: #29b39e;
`

const Buttonbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-right: 10px;
`