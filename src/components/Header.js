import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Container>
            <Heading>
                My Tasks
            </Heading>
        </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 100px;     
    padding: 0;
    margin: 0;
    background-color: #FFF4D1;  
`

const Heading = styled.div`
    padding-left: 30px;
    font-size: 3em;
    font-weight: 800;
    width: 50%;
    height: 100%;
    line-height: 2em;
    color: #ffb347;



`