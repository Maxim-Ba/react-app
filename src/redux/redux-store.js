import { createStore, combineReducers, applyMiddleware } from "redux";
import { contactsReducer } from './contactsReducer'
import { newsApiReducer } from './newsApiReducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';
import { wetherReducerApi } from "./wetherApiReducer";

const redusers = combineReducers({
  formState: contactsReducer,
  api: newsApiReducer,
  form: formReducer,
  wether: wetherReducerApi,

});
const store = createStore(redusers, applyMiddleware(thunkMiddleware));


export { store }