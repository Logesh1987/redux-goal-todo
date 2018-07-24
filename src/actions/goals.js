import API from 'goals-todos-api'
export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'


function addGoal(goal) {
    return {
        type: ADD_GOAL,
        goal,
    }
}

function removeGoal(id) {
    return {
        type: REMOVE_GOAL,
        id,
    }
}


export function handleDeleteGoal(item) {
    return (dispatch) => {
        dispatch(removeGoal(item.id))
        return API.deleteGoal(item.id)
            .catch(() => {
                alert('error occured; Please try l8r')
                dispatch(addGoal(item))
            })
    }
}

export function handleAddGoal(value, callback) {
    return (dispatch) => {
        return API.saveGoal(value)
            .then((todo) => {
                dispatch(addGoal(todo));
                callback();
            })
            .catch(() => alert('Error pls try again'))
    }
}
