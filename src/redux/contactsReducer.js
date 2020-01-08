const HANDLE_CHANGE = 'HANDLE_CHANGE';
const initialState = {
  name: '',
  email: '',
  number: '',
  textarea: ''
}
const actionCreatorInputForm = (event) => ({
  type: HANDLE_CHANGE,
  event: event
})
const contactsReducer = (state = initialState, action) => {
  if (action.type === HANDLE_CHANGE) {
    const target = action.event.target;
    const value = target.value;
    const name = target.name;
    state[name] = value;
  }
  return state;
}

export { contactsReducer, actionCreatorInputForm }