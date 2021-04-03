import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./MyButton.css"
import styled from 'styled-components'


const MyButton = ({ButtonText, handleClick}) => {

    return (
    <>  
        <Container>
            <But onClick =  {handleClick}>
                {ButtonText}
            </But>
        </Container>
    </>
    )
}

export default MyButton

const Container = styled.div`
    background: #29b39e;
    margin: 2px;
    margin-right: 10px;
    border-radius: 8px;
    border-width: 5px solid #22B14C;
`
const But = styled.div`
    width: 80px;
    font-weight: 600;
    text-align: center;
    padding: 10px;
    color: white;

    :hover {
        cursor: pointer;
        background: #389e8f;
        border-radius: 8px;
    }

    :active {    
        background-color: #0f7e9a;
    }

`


