import styled from 'styled-components'
import './AddTask.css'
import panda from'../bamboo/panda.gif';
import React, { useState, useEffect } from 'react';
import { EasybaseProvider, useEasybase } from 'easybase-react';


const AddFriend = ( ) => {

    const [inputValue, setInputValue] = React.useState("");
    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
        configureFrame({limit: 20 });
        sync();
      }, []);

    const onChangeHandler = event => {
        setInputValue(event.target.value);
      };

    const addTask = (e) => {
        e.preventDefault();
        console.log(inputValue);

        for (let i = 0; i < Frame().length; i++){

            console.log("line 28: ", Frame()[i].name)
            console.log("line 27:", inputValue)
            if (inputValue == Frame()[i].name){
                console.log("here 31:", Frame()[i])
                var data = Frame()[i];
            }
        }

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

export default AddFriend;

const Panda = styled.div`
    flex: 0.8;
    height: 100%;
`

const FormBox = styled.div`
    flex: 2.2;
    width: 100%;
    display: flex;
    align-items: center;


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
    justify-content: space-around;
    top: calc(50% - 225px);
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
    flex: 1.5;
    font-size: 2em;
    font-weight: 800;
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
`