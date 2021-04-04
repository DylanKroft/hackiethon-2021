import styled from 'styled-components'
import BambooPiece from "./BambooPiece.js"
import { EasybaseProvider, useEasybase } from 'easybase-react';
import React, { useState, useEffect } from 'react';


    

const GrowPanel = ({email, loggedIn}) => {

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
            bambooPieces.push(<BambooPiece />);
        }
    }

      
    return (
        <Container>
            <Box>           
            {bambooPieces.map((ele) => ele)}
            </Box>
        </Container>
    )
}

export default GrowPanel

const Container = styled.div`
    flex: 1;
    height: 99.5%;
    width: 50%;
    min-width: 150px;
    max-height: 650px;
    display: flex;
    flex-direction: column-reverse;    overflow-y: scroll;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    min-height: min-content;
`