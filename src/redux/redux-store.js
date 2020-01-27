import { createStore, combineReducers, applyMiddleware } from "redux";
import { contactsReducer } from './contactsReducer'
import { newsApiReducer } from './newsApiReducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';

const redusers = combineReducers({
  formState: contactsReducer,
  api: newsApiReducer,
  form: formReducer,

});
const store = createStore(redusers, applyMiddleware(thunkMiddleware));


export { store }