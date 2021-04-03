import React from 'react'
import styled from 'styled-components'
import bg from'../bamboo/bg.png';

const GrowPanel = () => {
    return (
        <Container>
        </Container>
    )
}

export default GrowPanel

const Container = styled.div`
    background-image: url(${bg});
    height: 100%;
    width: 50%;
    height: 100vh;
    max-height: 650px;
    max-width: 300px;
    margin-right: 10px;
`