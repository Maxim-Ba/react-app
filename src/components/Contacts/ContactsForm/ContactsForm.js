import React from 'react';
import style from './contacts__form.module.scss';
import {ButtonContacts} from '../../Buttons/ButtonContacts/ButtonContacts';
class ContactsForm extends React.Component {
  constructor(props) {
    super(props)
    this.newMessageNameRef = React.createRef();
    console.log(this.newMessageNameRef)
  }
  componentDidMount() {
    this.newMessageName = this.newMessageNameRef.current.value;
    console.log(this.newMessageNameRef)
    console.log(this.newMessageName)
  }
  render() {
    return (
      <form className={style.contacts__form}>
        <label htmlFor='name' className={style.contacts__label}>Имя</label>
        <input name='name' type='text' className={style.contacts__input} ref={this.newMessageNameRef} onChange={(e) => {this.newMessageNameRef.current.value}}></input>
        <label htmlFor='email' className={style.contacts__label}>Email</label>
        <input name='email' type='email' className={style.contacts__input}></input>
        <label htmlFor='number' className={style.contacts__label}>Телефон</label>
        <input name='number' type='number' className={style.contacts__input}></input>
        <label htmlFor='textarea' className={style.contacts__label}>Сообщение</label>
        <textarea name='textarea' className={style.contacts__input, style.contacts__textarea}></textarea>
        <ButtonContacts sendForm={this.props.sendForm} newMessageName={this.newMessageName}/>
      </form>
    )
  }
}

export { ContactsForm }