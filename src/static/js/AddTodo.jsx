import React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import {
    Button,
    InputLabel,
    Grid,
    MenuItem,
    Select,
    TextField
} from '@material-ui/core';

const initialState = {
    title: '',
    description: '',
    dueDate: new Date(),
    status: 0
};

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this)
    }

    componentWillReceiveProps(prop) {
        this.setState(initialState);
    }

    handleChange(field, event) {
        this.setState({[field]: event.target.value});
    }

    handleDateChange(date) {
        this.setState({dueDate: date})
    }

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="title"
                        label="Title"
                        value={this.state.title}
                        onChange={(e) => this.handleChange("title", e)}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        multiline
                        rowsMax="5"
                        id="description"
                        label="Description"
                        value={this.state.description}
                        onChange={(e) => this.handleChange("description", e)}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="dd/MM/yyyy"
                            value={this.state.dueDate}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputLabel htmlFor="status">Task Status</InputLabel>
                    <Select
                        displayEmpty
                        value={this.state.status}
                        onChange={(e) => this.handleChange("status", e)}
                        inputProps={{id: 'status'}}>
                        <MenuItem value={0}>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Todo</MenuItem>
                        <MenuItem value={2}>Ongoing</MenuItem>
                        <MenuItem value={3}>Stalled</MenuItem>
                        <MenuItem value={4}>Done</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(e) => this.props.submitHandler(this.state, e)}>
                        Save
                    </Button>
                </Grid>
            </Grid>
        );
    }
}


export default AddTodo;