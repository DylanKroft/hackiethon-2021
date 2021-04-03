import styled from 'styled-components'
import Taskbar from './Taskbar.js';
import Header from './Header.js';
import GrowPanel from './GrowPanel.js';
import AddTask from './AddTask.js';

const Profile = ({usrName}) => {
    return (
        <Container>
            <Header name={usrName}/>
            <TaskSection>
                <Taskbar />
                <GrowPanel />
            </TaskSection>
            <AddTask/>
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
    background-color: #FFF4D1;
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
    background-color: #FFF4D1;
    display: flex;
`