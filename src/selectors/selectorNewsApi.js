const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => {
      const action = actionCreatorInputForm(event)
      dispatch(action)
    },
    findNews: (data) => {
      const action = actionCreatorSetNews(data)
      dispatch(action)
    },
    toggleIsFetching:(isFetching)=>{
      dispatch(actionCreatorToggleIsFeatching(isFetching))
    },
    actionCreatorQueryInProgress:(a)=>{
      dispatch(actionCreatorQueryInProgress(a))
    },
    getNewsThunk:(value)=>{
      dispatch(getNewsThunk(value))
    }
  }
}