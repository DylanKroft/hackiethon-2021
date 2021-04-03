import styled from 'styled-components'

const tasklist = [
    {
        name : 'Hello',
        id: 1
    },
    {
        name : 'Hi',
        id: 2
    },
]

const Task = () => {
    return (
        <Container>
            {tasklist.map((task) => (
                <h3> {tasklist.name} </h3>
            ))}
            
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
