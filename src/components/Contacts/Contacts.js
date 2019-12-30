import React from 'react';
import  style  from './contacts.module.scss';

class Contacts extends React.Component {
  render() {
    return (
      <section className={style.contacts}>
        <h3>
          Contacts
        </h3>
      </section>
    )
  }
}
export { Contacts };