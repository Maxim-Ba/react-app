const HANDLE_CHANGE = 'HANDLE_CHANGE';
const initialState = {
  formState: {
    name: '',
    email: '',
    number: '',
    textarea: ''
  }
}
const actionCreatorInputForm = (event) => ({
  type: HANDLE_CHANGE,
  event: event
})
const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      const target = action.event.target;
      const value = target.value;
      const name = target.name;
      const stateCopy = {
        ...state,
        formState: { ...state.formState }
      }
      stateCopy.formState[name] = value;
      return stateCopy;
    default:
      return state
  }

}

export { contactsReducer, actionCreatorInputForm }