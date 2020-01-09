import React from 'react';
import { actionCreatorInputForm } from '../../../redux/contactsReducer';
import { ContactsForm } from './ContactsForm';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
  return{
    formState:state.formState.formState
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    handleChange: (event)=>{dispatch(actionCreatorInputForm(event))},
    sendForm: ()=>{console.log('кнопка нажата')},
  }
}
let ContainerContactsForm = connect(mapStateToProps, mapDispatchToProps)(ContactsForm);

export { ContainerContactsForm }