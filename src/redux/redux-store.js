import { createStore, combineReducers, applyMiddleware } from "redux";
import { contactsReducer } from './contactsReducer'
import { newsApiReducer } from './newsApiReducer'
import thunkMiddleware from 'redux-thunk'

const redusers = combineReducers({
  formState: contactsReducer,
  api: newsApiReducer
});
const store = createStore(redusers, applyMiddleware(thunkMiddleware));


export { store }