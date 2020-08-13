import {combineReducers} from 'redux';
import todoReducer from './todoReducers';

const rootReducer = combineReducers({
    savedTodoItems: todoReducer
})

export default rootReducer;