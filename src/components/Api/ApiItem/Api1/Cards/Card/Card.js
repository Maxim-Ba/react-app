import React from 'react';
import style from './Card.module.scss'

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <article className={style.Card}>
        <h3 className={style.Card__title}>this.props.title</h3>
        <img className={style.Card__img} src=''/>
        <p className={style.Card__description}>Описание</p>
      </article>)
  }
}

export { Card };