import React from 'react';
import style from './Cards.module.scss'
import { Card } from './Card/Card';

const PresentationCardsComponent = (props) => {
  const funcRender = (props) => {
    console.log(props)
    const arr = props.map((element, index) => {
      return <Card
        urlImage={element.urlToImage}
        source={element.source.name}
        title={element.title}
        description={element.description}
        publishedAt={element.publishedAt}
        url={element.url}
        key={index} />
    })
    console.log(arr)
    return arr
  }
  if (props.firstLoad === true) {
    return (
      <div className={style.Cards}>
        Введите текст запроса
        </div>)
  } else {
    const arrOfNews = funcRender(props.dataArticlesForRender)
    return (
      <div className={style.Cards}>
        {arrOfNews}
        {props.pagination()}
      </div>
    )
  }
}
export { PresentationCardsComponent };