import b1 from'../bamboo/bamboo1.png';
import b2 from'../bamboo/bamboo2.png';
import b3 from'../bamboo/bamboo3.png';
import b4 from'../bamboo/bamboo4.png';
import root from'../bamboo/root.png';

import styled from 'styled-components'

const BambooPiece = ({pic}) => {
    return (
        <Img p={pic}>
        </Img>
    )
}

export default BambooPiece

const Img = styled.div`    
    background-image: url(${({p}) => p});
    background-size:contain;
    width: 100%;
    height: 60px;
    background-repeat: no-repeat;
    background-position: center;

`