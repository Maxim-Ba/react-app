import React from 'react';
import  style  from './contacts.module.scss';
import { ContactsForm } from './ContactsForm/ContactsForm';

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
        <ContactsForm dispatch={this.props.dispatch}/>
      </section>
    )
  }
}
export { Contacts };