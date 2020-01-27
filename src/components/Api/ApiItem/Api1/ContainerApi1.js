import { actionCreatorInputForm, actionCreatorSetNews, actionCreatorToggleIsFeatching, actionCreatorQueryInProgress, getNewsThunk } from '../../../../redux/newsApiReducer';
import { Api1 } from './Api1';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';



const mapStateToProps = (state) => {
  return {
    dataCards: state.api.apiOfNews.data,
    queryInProgress: state.api.queryInProgress
  }
}

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

let WithRouterContainerApi1 = withRouter(Api1)
const ContainerApi1 = connect(mapStateToProps, mapDispatchToProps)(WithRouterContainerApi1)
export { ContainerApi1 };