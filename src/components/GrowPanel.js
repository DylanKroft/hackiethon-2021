import styled from 'styled-components'
import BambooPiece from "./BambooPiece.js"
import { EasybaseProvider, useEasybase } from 'easybase-react';
import React, { useState, useEffect } from 'react';
import b1 from'../bamboo/bamboo1.png';
import b2 from'../bamboo/bamboo2.png';
import b3 from'../bamboo/bamboo3.png';
import b4 from'../bamboo/bamboo4.png';
import root from'../bamboo/root.png';

    

const GrowPanel = ({email, loggedIn}) => {

    let bambooArray = [b1,b2,b3,b4]
    let bambooCount = 0;
    let bambooPieces =[];
    
    const { Frame, sync, configureFrame } = useEasybase();

    useEffect(() => {
        configureFrame({limit: 20 });
        sync();
      }, []);

    if(loggedIn) {
        for (let  i = 0; i < Frame().length; i++) {
            if (Frame()[i].name == email) {
                bambooCount = Frame()[i].score;
            }
        }

        for (let i = 0; i < bambooCount; i++) {
            let item = bambooArray[Math.floor(i%3)];
            bambooPieces.push(<BambooPiece pic={item}/>);
        }
    }

      
    return (
        <Container>
            <Box>   
            {bambooPieces.map((ele) => ele)}
            <BambooPiece pic={root}/>        
            </Box>
        </Container>
    )
}

export default GrowPanel

const Container = styled.div`
    flex: 2;
    height: 99.5%;
    width: 50%;
    min-width: 150px;
    display: flex;
    flex-direction: column-reverse;    
    overflow-y: auto;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    min-height: min-content;
`