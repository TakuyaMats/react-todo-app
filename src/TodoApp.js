import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

function TodoApp(){
    const initialTodos = [
        {id: 1, task: "Clean Fishtank", completed: false},
        {id: 2, task: "Wash Car", complete: true},
        {id: 3, task: "Grow Beard", completed: false}
    ]
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = newTodoText => {
        // the setTodos from the useState will override everything in todos.
            // then it will take all the existing todos [...todos] and adds in a new task
                // in this case, we are hard coding the id of 4, which we shouldn't
                // then for the task, it is going to call that argument passed in the addTodo function
                // and for obvious reason, define if the task is completed for not, set as a boolean value of false.
        setTodos([...todos, {id: 4, task: newTodoText, completed: false }])
    }

    return (
        <Paper 
            style={{
            padding: 0,
            margin: 0,
            height: '100vh',
            backgroundColor: '#fafafa'
        }}
        elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    {/* the addTodo name can be whatever it is, but its good practice to name it the function name. Also this is passing down the addTodo function as a prop. This can now be used in the TodoForm component */}
                    <TodoForm addTodo={addTodo}/>
                    {/* This component is padding down props, in this care todos, which is connected to the useState that has a property of all the data from tasks */}
                    <TodoList todos={todos}/>
                </Grid>
            </Grid>

        </Paper>
    )
}

export default TodoApp;

// -TodoApp
    // -TodoForm
    // -TodoList
        // -TodoItem