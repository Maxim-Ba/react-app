import { WraperForm } from './ContactsForm';
import {connect} from 'react-redux';


const mapStateToProps = (state)=>{
  return{
    formState:state.formState.formState,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
  }
}
let ContainerContactsForm = connect(mapStateToProps, mapDispatchToProps)(WraperForm);

export { ContainerContactsForm }