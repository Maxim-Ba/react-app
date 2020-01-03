import React from 'react';
import style from './buttonContacts.module.scss';

class ButtonContacts extends React.Component {
  constructor(props) {
    super(props)

  }
  makeDisible() {
    // сделать чтобы кнопка показывалась valid 
  }

  render() {
    return (
      <button className={style.ButtonContacts} type='submit'>
        Отправить
      </button>
    )
  }
}

export { ButtonContacts }