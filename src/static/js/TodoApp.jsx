import {format} from 'date-fns';
import React from "react";
import {
    Button,
    Container, 
    CssBaseline,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    List,
    ListItem,
    ListItemText
} from '@material-ui/core';

import AddTodo from "./AddTodo.jsx";
import TodoList from "./TodoList.jsx";


class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invalidOpen: false,
            confirmOpen: false,
            currentTask: {},
            tasks: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddClose = this.handleAddClose.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleSubmit(taskData, event) {
        if (taskData.name === "" || taskData.description === "")
            this.setState({invalidOpen: true});
        else {

            taskData.dueDate = format(taskData.dueDate, "dd-MM-yyyy");
            this.setState({
                currentTask: taskData,
                confirmOpen: true
            });
        }
    }

    handleAddClose() {
        this.setState({confirmOpen: false});
    }

    handleClose() {
        this.setState({invalidOpen: false});
    }

    handleConfirm() {
        let updatedList = this.state.tasks;
        updatedList.push(this.state.currentTask);
        this.setState({
            tasks: updatedList,
            confirmOpen: false
        });
    }


    handleStatusChange(index, event) {
        let updatedList = this.state.tasks;
        updatedList[index].status = event.target.value;
        this.setState({tasks: updatedList});
    }

    render() {
        let statusList = ["None", "Todo", "Ongoing", "Stalled", "Done"];
        let status = statusList[this.state.currentTask.status];
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" fixed>
                <h2>Task Manager</h2>
                <AddTodo submitHandler={this.handleSubmit}/>
                <Grid 
                    container
                    spacing={2}
                    justify="center">
                    <TodoList statusHandler={this.handleStatusChange} tasks={this.state.tasks}/>
                </Grid>
                <Dialog
                    open={this.state.confirmOpen}
                    onClose={this.handleAddClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Confirm Addition of Task?"}</DialogTitle>
                        <List>
                            <ListItem>
                                <ListItemText 
                                    primary="Title"
                                    secondary={this.state.currentTask.title}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Description"
                                    secondary={this.state.currentTask.description} />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Due Date"
                                    secondary={this.state.currentTask.dueDate} />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Status" 
                                    secondary={status}/>
                            </ListItem>
                        </List>
                    <DialogActions>
                        <Button onClick={this.handleAddClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleConfirm} color="primary" autoFocus>
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={this.state.invalidOpen}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Task is invalid"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Name/Description are required
                            </DialogContentText>
                        </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </React.Fragment>);
    }
}

export default TodoApp;