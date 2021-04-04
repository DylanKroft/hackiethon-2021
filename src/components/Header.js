import styled from 'styled-components'
import MyButton from './MyButton.js';
import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';

const Header = ({name, usrEmail}) => {

    const [showAdd, setShowAdd] = useState(false);

    const handleClick = () => {
        setShowAdd(!showAdd);
        console.log("hi")
    }
    
    return (
        <Container>
            {showAdd && <AddTask email={usrEmail}/>}
            <Heading>{name}'s Tasks</Heading>
            <Buttonbox>
                <MyButton ButtonText= 'Add Task' onSetAdd = {handleClick}/>
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
    background-color: #eaddb6; 
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Heading = styled.div`
    padding-left: 20px;
    font-size: 1.5em;
    font-weight: 800;
    width: 50%;
    min-width: 250px;
    height: 100%;
    line-height: 4em;
    color: #29b39e;
    text-align: left;
`

const Buttonbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-right: 10px;
`