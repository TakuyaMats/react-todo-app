import React from 'react';
import useInputState from './hooks/useInputState';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

// this function is grabbing the function addTodo that we passed down as props
function TodoForm({ addTodo }){
    const [value, handleChange, reset] = useInputState("");

    return(
        <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
            {/* by defining it in the form element, when we press enter, it will submit on the page */}
            <form onSubmit={e => {
                // this will prevent the page from refreshing after submitting the form
                e.preventDefault();
                // call addTodo function then pass in the current value in the form, so anything that is written in the TextField will be passed in to do the addTodo function
                addTodo(value);
                // this reset function just resets the textField back to blank
                reset();
            }}>
                <TextField value={value} onChange={handleChange} margin='normal' label='Add New Todo' fullWidth/>
            </form>
        </Paper>
    )
}

export default TodoForm;