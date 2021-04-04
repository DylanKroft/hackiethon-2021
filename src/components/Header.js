import styled from 'styled-components'
import MyButton from './MyButton.js';
import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';

let buttonText = "Add Task"

const Header = ({name, usrEmail}) => {

    const [showAdd, setShowAdd] = useState(false);

    const handleClick = () => {
        setShowAdd(!showAdd);

        if(showAdd) {
            buttonText = "Add Task";
        } else {
            buttonText = "Close";
        }
    }

    
    return (
        <Container>
            {showAdd && <AddTask email={usrEmail}/>}
            <Heading>{name}'s Tasks</Heading>
            <Buttonbox>
                <MyButton ButtonText={buttonText} onSetAdd = {handleClick}/>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Heading = styled.div`
    padding-left: 25px;
    font-size: 1.5em;
    font-weight: 800;
    width: 50%;
    min-width: 250px;
    height: 100%;
    line-height: 5em;
    color: #29b39e;
    text-align: left;
`

const Buttonbox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-right: 10px;
`