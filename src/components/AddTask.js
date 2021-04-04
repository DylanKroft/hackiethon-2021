import styled from 'styled-components'
import './AddFriend1.css'
import { EasybaseProvider, useEasybase } from 'easybase-react';
import React, { useState, useEffect } from 'react';

const AddTask = ( {email, loggedIn, displayAdd}) => {

    const [inputValue, setInputValue] = React.useState("");
    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
        configureFrame({limit: 20 });
        sync();
      }, []);

    for (let i = 0; i < Frame().length; i++){

        if (Frame()[i].name == email){
            var data = Frame()[i];
        }
    }

    const onChangeHandler = event => {
        setInputValue(event.target.value);
      };

    const addTask = (e) => {
        e.preventDefault();
        console.log("HIIII" + data.description)
        if (data.description != "") {
            data.description = data.description + "," + inputValue;
        } else {
            data.description = inputValue + ",";
        }
        sync();
        displayAdd();
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
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 40px;


    @media screen and (max-width: 1000px) {
     {
         width: 100%;
    }
`

const Container = styled.div`
    width: 45%;
    height: 200px;
    background-color: #f0d890;
    position: absolute;
    z-index: 1000;
    top: 35%;
    left: 2.5%;
    right: 2.5%;
    border-radius: 10px 10px 10px 10px;
    border: 2px solid white;
    -webkit-box-shadow: 0px 0px 27px -15px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 27px -15px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 27px -15px rgba(0,0,0,0.75);




    @media screen and (max-width: 1000px) {
     {
         width: 95%;
         left: 2.5%;
        right: 2.5%;
    }
`

const Heading = styled.div`
    font-size: 2em;
    font-weight: 800;
    width: 50%;
    min-width: 250px;
    line-height: 3em;
    color: white;
    margin-left: 40px;
`