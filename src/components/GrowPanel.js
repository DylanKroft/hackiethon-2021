import styled from 'styled-components'
import BambooPiece from "./BambooPiece.js"

const GrowPanel = () => {
    return (
        <Container>
            <Box>           
            <BambooPiece />
            <BambooPiece />
            <BambooPiece />
            <BambooPiece />
            <BambooPiece />
            <BambooPiece />
            <BambooPiece />
            <BambooPiece />
            <BambooPiece />

            </Box>
        </Container>
    )
}

export default GrowPanel

const Container = styled.div`
    flex: 1;
    height: 99.5%;
    width: 50%;
    max-height: 650px;
    display: flex;
    flex-direction: column-reverse;    overflow-y: scroll;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    min-height: min-content;
`