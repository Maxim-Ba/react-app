import React from 'react';
import style from './Card.module.scss'
import { NavLink } from 'react-router-dom';

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.imgUrl= this.props.urlImage
  }

  render() {
    return (
      <article className={style.Card}>
        <NavLink to={`/Api/Api1/${this.props.title}`}>
          <img className={style.Card__img} src={this.imgUrl}/>
        </NavLink>
        <h3 className={style.Card__title}>{this.props.title}</h3>
        <p className={style.Card__description}>{this.props.description}</p>
        <p className={style.Card__description}>{this.props.source}</p>
        <p className={style.Card__description}>{this.props.publishedAt}</p>
        <p className={style.Card__description}>{this.props.url}</p>
      </article>)
  }
}

export { Card };