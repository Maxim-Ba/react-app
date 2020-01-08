import React from 'react';
import { actionCreatorInputForm } from '../../../redux/contactsReducer';
import { ContactsForm } from './ContactsForm';
class ContainerContactsForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }
  sendForm() {
    console.log('кнопка нажата')
  }
  handleChange(event) {
    return this.props.dispatch(actionCreatorInputForm(event));
  }
  render() {
    return (
      <ContactsForm handleChange={this.handleChange} sendForm={this.sendForm} />
    )
  }
}

export { ContainerContactsForm }