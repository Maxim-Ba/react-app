import { Cards } from './Cards';
import { connect } from 'react-redux';

const mapStateToProps = (state)=>{
  return{
    news:state.api.apiOfNews.data.data
  }
}
// const mapDispatchToProps = ()=>{}

const ContainerCards = connect(mapStateToProps)(Cards)


export { ContainerCards };