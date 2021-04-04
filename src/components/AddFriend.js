import styled from 'styled-components'
import React, { useState } from 'react'; 
import './AddTask.css'
import panda from'../bamboo/panda.gif';

const AddTask = () => {

    const [inputValue, setInputValue] = React.useState("");

    const onChangeHandler = event => {
        setInputValue(event.target.value);
      };

    const addTask = (e) => {
        e.preventDefault();
        console.log(inputValue);
        setInputValue("");
    }

    return (
        <Container>
            <Heading>Add Friend</Heading>
            <Panda>
                <img className="panda" src={panda} alt="loading..." />
            </Panda>
            <FormBox>
                <form onSubmit={addTask}>
                    <input
                    type="text"
                    name="name"
                    onChange={onChangeHandler}
                    value={inputValue}
                    autocomplete="off"
                />
                    <button className="primary__btn" type="submit">
                        Invite
                    </button>
                </form>
            </FormBox>

        </Container>
    )
}

export default AddTask

const Panda = styled.div`
`

const FormBox = styled.div`
    width: 100%;
    padding-left: calc(40px + 3%);


    @media screen and (max-width: 800px) {
     {
         width: 100%;
         padding-left: 30px;

    }
`

const Container = styled.div`
    width: 45%;
    height: 500px;
    background-color: #f0d890;
    border: 2px solid white;
    position: relative;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 35%;
    left: 2%;
    border-radius: 10px 10px 10px 10px;
    

    @media screen and (max-width: 1000px) {
     {  
        width: 90%;
        left: 5%;
        right: 5%;
        top: 0%;
    }
`

const Heading = styled.div`
    padding-left: 30px;
    font-size: 2em;
    font-weight: 800;
    color: white;
`