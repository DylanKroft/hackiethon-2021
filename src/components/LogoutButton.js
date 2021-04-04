import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styled from 'styled-components'
import Tooltip from "@material-ui/core/Tooltip";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
    <>  
        <Container>

        <Tooltip
                title="Click here to logout."
                placement="top"
            >

<But onClick={() => logout()}>
                Log Out                
            </But>
            </Tooltip>

            
            
            
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
`
const But = styled.div`
transition: background-color 0.3s ease;
    -webkit-transition: background-color 0.3s ease;
    width: 60px;
    font-weight: 600;
    text-align: center;
    padding: 10px;
    color: white;
    border-radius: 8px;
    font-size: 0.8em;


    :hover {
        cursor: pointer;
        background: #ffb11b;
        border-radius: 8px;
    }

    :active {    
        background-color: #E07800;
    }

`