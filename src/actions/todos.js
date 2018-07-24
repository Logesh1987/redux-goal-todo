import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}

function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id,
    }
}

function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}


export function handleDeleteTodo(item) {
    return (dispatch) => {
        dispatch(removeTodo(item.id))
        return API.deleteTodo(item.id)
            .catch(() => {
                alert('error occured; Please try l8r')
                dispatch(addTodo(item))
            })
    }
}

export function handleAddTodo(value, callback) {
    return (dispatch) => {
        return API.saveTodo(value)
            .then((todo) => {
                callback();
                dispatch(addTodo(todo))
            })
            .catch(() => alert('Error pls try again'))
    }
}

export function handleToggleTodo(item) {
    return (dispatch) => {
        dispatch(toggleTodo(item.id))
        return API.saveTodoToggle(item.id)
            .catch(() => {
                alert('error occured; Please try l8r')
                dispatch(toggleTodo(item.id))
            })
    }
}