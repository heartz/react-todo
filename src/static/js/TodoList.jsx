import React from "react";

import Todo from "./Todo.jsx";

class TodoList extends React.Component {
    render() {
        return this.props.tasks.map((todo, index) => (
            <Todo 
                key={index}
                index={index}
                todo={todo}
                statusHandler={this.props.statusHandler}/>
        ));
    }
}

export default TodoList;