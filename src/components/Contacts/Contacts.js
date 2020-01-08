import React from 'react';
import  style  from './contacts.module.scss';
import { ContainerContactsForm } from './ContactsForm/ContainerContactsForm';

class Contacts extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <section className={style.contacts}>
        <h3>
          Contacts
        </h3>
        <ContainerContactsForm dispatch={this.props.dispatch}/>
      </section>
    )
  }
}
export { Contacts };