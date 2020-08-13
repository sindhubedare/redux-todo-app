import * as actions from '../actions/todoActions';

export const initialState = {
    savedTodoItems: ["Make a todo list of all my todo lists", "Make a playlist for every possible occasion", "Stop checking phone compulsively"]
}

export default function todoReducer(state=initialState, action){
    switch(action.type){
        case actions.UPDATE_TODO_LIST:
            return {savedTodoItems: [...initialState.savedTodoItems,action.payload]};
        default: return state;
    }
}