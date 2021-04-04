import React from 'react';
import styled from 'styled-components'
import './LoginButton.css';
import { useAuth0 } from '@auth0/auth0-react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Container>
 
                <button class="button buttonBox" onClick={() => loginWithRedirect()}>
                    Begin
                </button>

        </Container>
    )
}

export default LoginButton

const Container = styled.div`
    border-radius: 100px;
`