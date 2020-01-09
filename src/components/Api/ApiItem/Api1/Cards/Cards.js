import React from 'react';
import style from './Cards.module.scss'
import { Card } from './Card/Card';

class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.func = this.func.bind(this)
  }
  func(props) {
    const arr = props.map((element, index) => {
      return <Card
        source={element.source.name}
        title={element.title}
        description={element.description}
        urlImage={props.urlToImage}
        publishedAt={element.publishedAt}
        url={element.url}
        key={index} />
    })
    console.log(arr)
    return arr
  }

  render() {
    console.log(this.props.news)

    if (this.props.news === 'DATA') {
      return (
        <div className={style.Cards}>
        Введите текст запроса
        </div>)
    } else {
      const arrOfNews = this.func(this.props.news)
      return (
        <div className={style.Cards}>
          {arrOfNews}
        </div>
      )
    }
  }
}
export { Cards };