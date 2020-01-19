import { Cards } from './Cards';
import { connect } from 'react-redux';
import { actionCreatorChangeurrentPage, actionCreatorToggleIsFeatching, actionCreatorsendDataOfCurrentCard } from '../../../../../redux/newsApiReducer';

const mapStateToProps = (state)=>{
  return{
    news:state.api.apiOfNews.data.data,
    pageSize:state.api.pageSize,
    totalArticlesCount:state.api.totalArticlesCount,
    currentPage:state.api.currentPage,
    isFetching:state.api.isFetching,
  }
}

const ContainerCards = connect(mapStateToProps, {setCurrentPage: actionCreatorChangeurrentPage,toggleIsFetching:actionCreatorToggleIsFeatching, sendDataOfCurrentCard: actionCreatorsendDataOfCurrentCard})(Cards)


export { ContainerCards };