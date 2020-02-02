import React from 'react';
import style from './buttonContacts.module.scss';

class ButtonContacts extends React.Component {



  render() {
    return (
      <button className={style.ButtonContacts} type='submit'>
        Отправить
      </button>
    )
  }
}

export { ButtonContacts }