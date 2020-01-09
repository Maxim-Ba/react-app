import React from 'react';
import style from './Card.module.scss'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.imgUrl= this.props.urlImage
  }

  render() {
    return (
      <article className={style.Card}>
        <h3 className={style.Card__title}>{this.props.title}</h3>
        <img className={style.Card__img} src={this.imgUrl}/>
        <p className={style.Card__description}>{this.props.description}</p>
        <p className={style.Card__description}>{this.props.source}</p>
        <p className={style.Card__description}>{this.props.publishedAt}</p>
        <p className={style.Card__description}>{this.props.url}</p>
      </article>)
  }
}

export { Card };