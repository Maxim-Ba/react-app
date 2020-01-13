import { Cards } from './Cards';
import { connect } from 'react-redux';
import { actionCreatorChangeurrentPage, actionCreatorToggleIsFeatching } from '../../../../../redux/newsApiReducer';

const mapStateToProps = (state)=>{
  return{
    news:state.api.apiOfNews.data.data,
    pageSize:state.api.pageSize,
    totalArticlesCount:state.api.totalArticlesCount,
    currentPage:state.api.currentPage,
    isFetching:state.api.isFetching,
  }
}
// const mapDispatchToProps = (dispatch)=>{
//   return{
    
//     setCurrentPage: (pageNumber)=>{
//       const action = actionCreatorChangeurrentPage(pageNumber)
//       dispatch(action)
//     },
//     toggleIsFetching:(isFetching)=>{
//       dispatch(actionCreatorToggleIsFeatching(isFetching))
//     }
//   }
// }



const ContainerCards = connect(mapStateToProps, {setCurrentPage: actionCreatorChangeurrentPage,toggleIsFetching:actionCreatorToggleIsFeatching})(Cards)


export { ContainerCards };