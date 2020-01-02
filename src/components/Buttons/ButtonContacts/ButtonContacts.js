import React from 'react';
import style from './buttonContacts.module.scss';

class ButtonContacts extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.sendForm = this.props.sendForm.bind(this);
    this.newMessageName = this.props.newMessageName
  }
  makeDisible() {
    // сделать чтобы кнопка показывалась valid 
  }

  render() {
    return (
      <button className={style.ButtonContacts} onClick={this.sendForm(this.newMessageName)}>
        Отправить
      </button>
    )
  }
}

export { ButtonContacts }