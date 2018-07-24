import React from 'react';
import {connect} from  'react-redux';
import List from './List';
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo
} from '../actions/todos'

class Todos extends React.Component {
    addTodo = (e) => {
        e.preventDefault();
        this.props.dispatch(handleAddTodo(this.input.value, () => { this.input.value = ""; }));
    }

    removeItem = (item) => {
        this.props.dispatch(handleDeleteTodo(item))
    }

    toggleItem = (item) => {
        this.props.dispatch(handleToggleTodo(item))
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Todos</h2>
                <input type="text" placeholder="Add Todo" ref={(input) => this.input = input} />
                <button onClick={this.addTodo}>Add Todo</button>
                <List toggle={this.toggleItem} remove={this.removeItem} items={this.props.todos} />
            </div>
        )
    }
}

export default connect((state) => ({
    todos: state.todos
}))(Todos)