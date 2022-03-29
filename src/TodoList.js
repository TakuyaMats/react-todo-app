import React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


function TodoList(props){
    return (
        <Paper>
            {props.todos.map(todo => (
                <>
                    <ListItem>
                        <ListItemText>{todo.task}</ListItemText>
                    </ListItem>
                    <Divider />
                </>
            ))}
        </Paper>
    )
}

export default TodoList;