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
            <Heading>Add Task</Heading>
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
                        Submit
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
    height: 150px;
    background-color: #D6C48F;
    position: fixed;
    z-index: 1000;
    top: 30%;
    left: 2.5%;
    right: 2.5%;
    border-radius: 10px 10px 10px 10px;
    -webkit-box-shadow: 0px 0px 27px 4px rgba(102,102,102,1);
    -moz-box-shadow: 0px 0px 27px 4px rgba(102,102,102,1);
    box-shadow: 0px 0px 27px 4px rgba(102,102,102,1);

    @media screen and (max-width: 1000px) {
     {
         width: 95%;
         left: 2.5%;
        right: 2.5%;
    }
`

const Heading = styled.div`
    padding-left: 30px;
    font-size: 2em;
    font-weight: 800;
    width: 50%;
    min-width: 250px;
    line-height: 2em;
    color: white;
`