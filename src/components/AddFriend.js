import styled from 'styled-components'
import React, { useState } from 'react'; 
import './AddTask.css'

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

const FormBox = styled.div`
    width: 100%;
    display: inline-block;
    position: relative;


    @media screen and (max-width: 800px) {
     {
         width: 100%;
    }
`

const Container = styled.div`
    width: 45%;
    height: 200px;
    background-color: #D6C48F;
    border: 2px solid white;
    position: relative;
    z-index: 1000;
    top: 35%;
    left: 2%;
    border-radius: 10px 10px 10px 10px;

    @media screen and (max-width: 1000px) {
     {  
        width: 90%;
        left: 5%;
        top: 0%;
    }
`

const Heading = styled.div`
    padding-left: 30px;
    font-size: 2em;
    font-weight: 800;
    width: 50%;
    min-width: 250px;
    line-height: 3em;
    color: white;
`