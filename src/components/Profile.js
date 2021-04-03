import styled from 'styled-components'
import Taskbar from './Taskbar.js';
import Header from './Header.js';

const Profile = () => {
    return (
        <Container>
            <Header />
            <TaskSection>
                <Buffer />
                    <Taskbar />
                <Buffer />
            </TaskSection>
        </Container>
    )
}

export default Profile

const Container = styled.div`
    width: 50%;
    height: 100%;
    min-width: 400px;
    min-height: 600px;
    margin: 0;
    padding: 0;
    background-color: blue;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px) {
     {
         width: 100%;
    }
}
`
const TaskSection = styled.div`
    width: 100%;
    background-color: orange;
    display: flex;
    flex-direction: column;
`
const Buffer = styled.div`
    width: 10%;
    flex-shrink: 100;
`
