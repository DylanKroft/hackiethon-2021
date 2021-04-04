import styled from 'styled-components'
import './AddFriend1.css'
import { EasybaseProvider, useEasybase } from 'easybase-react';
import React, { useState, useEffect } from 'react';

const AddChallenge = ({ friendEmail }) => {

    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
        configureFrame({limit: 20 });
        sync();
    }, []);

    var friendData = "";
    for (let i = 0; i < Frame().length; i++){

        if (friendEmail == Frame()[i].name){
            friendData = Frame()[i];
        } 
    }

    const sendData = () => {

        var button = document.querySelector("#Challenge_1");
        
        let challenge = button.value;
        console.log(challenge);

        if (friendData.description != "") {
            friendData.description = friendData.description + challenge + ",";
        } else {
            friendData.description = challenge + ",";
        }
        sync()
    }
    return (
            <Container>
                <button id="Challenge_1" onClick={sendData} value={"Pushup"}></button>
                <button onClick={sendData} value={"PushDown"}></button>
                <button onClick={sendData} value={"PushSide"}></button>
                <button onClick={sendData} value={"Push"}></button>
            </Container>
    )
}

export default AddChallenge


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
    display: flex;

    @media screen and (max-width: 1000px) {
     {
         width: 95%;
         left: 2.5%;
        right: 2.5%;
    }
`

const But1 = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 500px;
    background-color: red;

`