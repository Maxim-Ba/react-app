import React from 'react';
import style from './buttonContacts.module.scss';

class ButtonContacts extends React.Component {
  constructor(props) {
    super(props)
    this.onSendForm = this.props.sendForm
  }
  makeDisible() {
    // сделать чтобы кнопка показывалась valid 
  }

  render() {
    return (
      <button className={style.ButtonContacts} type='submit' onClick={this.onSendForm}>
        Отправить
      </button>
    )
  }
}

export { ButtonContacts }