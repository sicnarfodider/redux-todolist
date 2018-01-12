import { combineReducers } from 'redux';
import todoReducer from './todo-reducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  todo: todoReducer,
  form: formReducer,
});
