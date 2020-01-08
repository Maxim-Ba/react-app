import { createStore, combineReducers } from "redux";
import { contactsReducer } from './contactsReducer'
import { newsApiReducer } from './newsApiReducer'


let redusers = combineReducers({
  formState: contactsReducer,
  api: newsApiReducer
});
let store = createStore(redusers);


export { store }