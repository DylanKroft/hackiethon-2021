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
    min-height: 600px;
    margin: 0;
    padding: 0;
    background-color: #eaddb6;
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
    background-color: #eaddb6;
    display: flex;
    border: 1px solid red;
`