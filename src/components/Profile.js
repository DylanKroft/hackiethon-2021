import styled from 'styled-components'
import Taskbar from './Taskbar.js';
import Header from './Header.js';
import GrowPanel from './GrowPanel.js';
import AddTask from './AddTask.js';

const Profile = ({usrName, usrEmail, loggedIn, displayAddTask, showTaskAdd}) => {
    return (
        <Container>
            <Header name={usrName} showTaskAdd={showTaskAdd}/>
            <TaskSection>
                <Taskbar email={usrEmail} loggedIn={loggedIn}/>
                <GrowPanel />
            </TaskSection>
           {displayAddTask && <AddTask email={usrEmail}/>}
        </Container>
    )
}

export default Profile

const Container = styled.div`
    width: 50%;
    height: 100%;
    min-width: 400px;
    background-color: #eaddb6;
    justify-content: space-space-around;
    align-items: center;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
     {
         width: 100%;
    }
}
`
const TaskSection = styled.div`
    width: 95%;
    background-color: #eaddb6;
    display: flex;
    border: 2px solid white;
    border-radius: 15px;
    overflow-y: scroll;
    height: 75%;
`