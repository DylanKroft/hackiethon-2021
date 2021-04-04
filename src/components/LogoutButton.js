import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styled from 'styled-components'

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
    <>  
        <Container>
            <But onClick={() => logout()}>
                Log Out                
            </But>
        </Container>
    </>
        
    )
}

export default LogoutButton

const Container = styled.div`
    background: #ffa500;
    margin: 2px;
    margin-right: 18px;
    border-radius: 8px;
    border-width: 5px solid #ffa500;
    width: 100px;
    margin-left: 20px;
`
const But = styled.div`
    width: 80px;
    font-weight: 600;
    text-align: center;
    padding: 10px;
    color: white;

    :hover {
        cursor: pointer;
        background: #ffb11b;
        border-radius: 8px;
    }

    :active {    
        background-color: #E07800;
    }

`