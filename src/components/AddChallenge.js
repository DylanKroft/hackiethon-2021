import styled from 'styled-components'
import './AddFriend1.css'
import { EasybaseProvider, useEasybase } from 'easybase-react';
import React, { useState, useEffect } from 'react';
import './AddChallenge.css'
import { IoIosWater } from "react-icons/io";
import {IconContext} from "react-icons";
import { BiWalk } from "react-icons/bi"
import { GiGymBag } from "react-icons/gi"
import {GiMeditation} from "react-icons/gi"


const AddChallenge = ({ friendEmail , ownerEmail}) => {

    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
        configureFrame({limit: 20 });
        sync();
    }, []);

    var friendData = "";
    var ownerData = "";
    var challenge = "";

    for (let i = 0; i < Frame().length; i++){

        if (friendEmail == Frame()[i].name){
            friendData = Frame()[i];
        } 
        
        if (ownerEmail == Frame()[i].name){
            ownerData = Frame()[i];
        }
    }

    const sendData1 = () => {

        var button = document.querySelector("#Challenge_1");
        challenge = button.value;

        if (friendData.description != "") {
            friendData.description = challenge + "," + friendData.description;
        } else {
            friendData.description = challenge + ",";
        }

        if (ownerData.score >= 3){
            ownerData.score -= 3;
        }

        if (ownerData.score < 0) {
            ownerData.score = 0;
        }

        sync()
    }

    const sendData2 = () => {

        var button = document.querySelector("#Challenge_2");
        challenge = button.value;

        if (friendData.description != "") {
            friendData.description = challenge + "," + friendData.description;
        } else {
            friendData.description = challenge + ",";
        }

        if (ownerData.score > 3){
            ownerData.score -= 3;
        }

        sync()
    }

    const sendData3 = () => {

        var button = document.querySelector("#Challenge_3");
        challenge = button.value;

        if (friendData.description != "") {
            friendData.description = challenge + "," + friendData.description;
        } else {
            friendData.description = challenge + ",";
        }

        if (ownerData.score > 3){
            ownerData.score -= 3;
        }

        sync()
    }

    const sendData4 = () => {

        var button = document.querySelector("#Challenge_4");
        challenge = button.value;

        if (friendData.description != "") {
            friendData.description = challenge + "," + friendData.description;
        } else {
            friendData.description = challenge + ",";
        }

        if (ownerData.score > 3){
            ownerData.score -= 3;
        }

        sync()
    }
    
    
    
    return (
            <Container>
                <Head>
                    Send a wellness challenge to your friend. Costs 3 Bamboos.
                </Head>
                <B>
            <IconContext.Provider value={{className: "icons"}}>

                <button class="butt" id={"Challenge_1"}onClick={sendData1} value={"Challenge: Do 15 pushups"}><GiGymBag/></button>
                <button class="butt" id={"Challenge_2"}onClick={sendData2} value={"Challenge: Drink 500mL of water"}><IoIosWater/></button>
                <button class="butt" id={"Challenge_3"}onClick={sendData3} value={"Challenge: Talk a walk."}><BiWalk/></button>
                <button class="butt" id={"Challenge_4"}onClick={sendData4} value={"Challenge: Meditate for 5 minutes"}><GiMeditation/></button>
                </IconContext.Provider>
                </B>
            </Container>
    )
}

export default AddChallenge

const Head = styled.div`
    font-weight: 600;
    color: white;
    margin-top:10px;
    font-size: calc(0.9em + 10%);

`

const B = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: wrap;
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
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: wrap;
    flex-direction: column;

    @media screen and (max-width: 1000px) {
     {
         width: 95%;
         left: 2.5%;
        right: 2.5%;
    }
`
