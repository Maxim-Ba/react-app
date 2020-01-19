import React from 'react';
import style from './CardDescription.module.scss';


class CardDescription extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className={style.CardDescription}>
        <h3 className={style.CardDescription__title}>{this.props.news.title}</h3>
        <p className={style.CardDescription__description}>{this.props.news.description}</p>
        <p className={style.CardDescription__description}>{this.props.news.source}</p>
        <p className={style.CardDescription__description}>{this.props.news.publishedAt}</p>
        <p className={style.CardDescription__description}>{this.props.news.url}</p>

      </section>
    )
  }
}
// сделать кнопку назад
export { CardDescription };