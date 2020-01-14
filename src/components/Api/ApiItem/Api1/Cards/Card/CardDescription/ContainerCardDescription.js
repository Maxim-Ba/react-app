import { connect } from 'react-redux';
import { CardDescription } from './CardDescription';

const mapStateToProps = (state)=>{
  return{
    news:state.api.currentCard,
  }
}
const ContainerCardDescription = connect(mapStateToProps)(CardDescription)

export { ContainerCardDescription };