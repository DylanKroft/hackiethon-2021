import styled from 'styled-components'

const AddTask = () => {

    return (
        <Container>
            <form className = 'add-form'>
                <div className = 'control'>
                    <label>Task</label>
                    <input type = 'Text' placeholder = 'Add'/>
                </div>

                <div className = 'control'>
                    <label>Description</label>
                    <input type = 'Text' placeholder = 'Add'/>
                </div>

                <div className = 'control'>
                    <label>Time</label>
                    <input type = 'Text' placeholder = 'Add'/>
                </div>

                <input type = 'subimit' value = 'Save'/>

            </form>

        </Container>
    )
}

export default AddTask

const Container = styled.div`
    width: 40%;
    height: 200px;
    background-color: red;
    position: fixed;
    z-index: 100;
    top: 0;

    @media screen and (max-width: 800px) {
     {
         width: 100%;
    }
`