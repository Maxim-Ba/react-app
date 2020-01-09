import { actionCreatorInputForm, actionCreatorSetNews } from '../../../../redux/newsApiReducer';
import { Api1 } from './Api1';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    dataCards: state.api.apiOfNews.data
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
    }
  }
}
const ContainerApi1 = connect(mapStateToProps, mapDispatchToProps)(Api1)
export { ContainerApi1 };