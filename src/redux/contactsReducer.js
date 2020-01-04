const HANDLE_CHANGE = 'HANDLE_CHANGE';
const actionCreatorInputForm = (event) =>  ({
  type: HANDLE_CHANGE,
  event: event
})
const contactsReducer = (state, action) => {
  if (action.type === HANDLE_CHANGE) {
    const target = action.event.target;
    const value = target.value;
    const name = target.name;
    state[name] = value;
    console.log(state);
}
  return state;
}

export { contactsReducer, actionCreatorInputForm }