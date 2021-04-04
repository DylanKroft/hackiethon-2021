import styled from 'styled-components'
import React, { useState } from 'react'; 

const AddTask = ({email}) => {

    const [inputValue, setInputValue] = React.useState("");

    const onChangeHandler = event => {
        setInputValue(event.target.value);
      };

    const addTask = (e) => {
        e.preventDefault();
        console.log(inputValue);
        setInputValue("");
    }

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    return (
        <Container>
            <Heading>Add Task</Heading>
            
            <FormBox>
                
                <form onSubmit={addTask}>
                    <div>
                        <label>Task Name </label>
                        <input
                            type="text"
                            name="name"
                            placeholder = 'Add Task Name'
                            onChange={onChangeHandler}
                            value={name} onChange ={(e) => setName(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label>Description </label>
                        <input 
                            type = 'Text'
                            name = 'Description' 
                            placeholder = 'Add Description'
                            onChange={onChangeHandler}
                            value={description} onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Time taken</label>
                        <select name ='Time'>
                            <option>Select Time</option>
                            <option value = '15'>15 minutes</option>
                            <option value = '30'>30 minutes</option>
                            <option value = '60'>1 hour</option>
                            <option value = '90'>1 hour 30 min</option>
                            <option value = '120'>2 hour</option>
                        </select>

                    </div>

                    <button className="primary__btn" type="submit">
                        Submit
                    </button>
                </form>
            </FormBox>

        </Container>
    )
}

export default AddTask

const FormBox = styled.div`
    position: fixed;
    width: 30%;
    top: 100px;
    left: 5%;

    @media screen and (max-width: 800px) {
     {
         width: 100%;
    }

`

const Container = styled.div`
    width: 50%;
    height: 200px;
    background-color: #D6C48F;
    position: fixed;
    z-index: 100;
    top: 0;
    border-radius: 15px;

    @media screen and (max-width: 800px) {
     {
         width: 100%;
    }
`

const Heading = styled.div`
    padding-left: 30px;
    font-size: 2em;
    font-weight: 800;
    width: 50%;
    min-width: 250px;
    height: 100%;
    line-height: 3em;
    color: white;
`