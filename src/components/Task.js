import styled from 'styled-components'

const Task = ({taskText}) => {
    return (
        <Container>
            {taskText}
        </Container> 
    )
}

export default Task

const Container = styled.div`
    width: 100%;
    height: 60px;       
    display: flex;
    background-color: #ECEBBD;
    margin-bottom: 5px;
`
