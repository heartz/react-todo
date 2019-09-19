import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    MenuItem,
    Select,
    Typography,
    Grid
} from '@material-ui/core';


class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, description, dueDate } = this.props.todo;
        return (
            <Grid item>
                <Card>
                    <CardHeader
                        title={title}
                    />
                    <CardContent>
                        <Typography color="textSecondary">
                            Description: {description}
                        </Typography>
                        <Typography color="textSecondary">
                            Due Date: {dueDate}
                        </Typography>
                        <Select
                            value={this.props.todo.status}
                            onChange={(e) => this.props.statusHandler(this.props.index, e)}
                            inputProps={{id: 'status'}}>
                            <MenuItem value={0}>
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Todo</MenuItem>
                            <MenuItem value={2}>Ongoing</MenuItem>
                            <MenuItem value={3}>Stalled</MenuItem>
                            <MenuItem value={4}>Done</MenuItem>
                        </Select>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

export default Todo;