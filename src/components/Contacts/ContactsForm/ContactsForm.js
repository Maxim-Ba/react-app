import React from 'react';
import style from './contacts__form.module.scss';
import {ButtonContacts} from '../../Buttons/ButtonContacts/ButtonContacts';
class ContactsForm extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.props.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className={style.contacts__form} onSubmit={this.handleSubmit}>
        <label htmlFor='name' className={style.contacts__label}>Имя</label>
        <input placeholder='Ваше имя' name='name' type='text' className={style.contacts__input} onChange={this.handleChange}></input>
        <label htmlFor='email' className={style.contacts__label}>Email</label>
        <input placeholder='Электронная почта' name='email' type='email' className={style.contacts__input} onChange={this.handleChange}></input>
        <label htmlFor='number' className={style.contacts__label}>Телефон</label>
        <input placeholder='Телефонный номер' name='number' type='number' className={style.contacts__input} onChange={this.handleChange}></input>
        <label htmlFor='textarea' className={style.contacts__label}>Сообщение</label>
        <textarea placeholder='Напишите ваше сообщение мне' name='textarea' className={style.contacts__input, style.contacts__textarea} onChange={this.handleChange}></textarea>
        <ButtonContacts sendForm={this.props.sendForm} newMessageName={this.newMessageName}/>
      </form>
    )
  }
}

export { ContactsForm }