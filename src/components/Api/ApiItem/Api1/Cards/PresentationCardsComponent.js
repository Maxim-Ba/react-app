import React from 'react';
import style from './Cards.module.scss'
import { Card } from './Card/Card';

const PresentationCardsComponent = (props) => {

  const funcRender = (props, func) => {
    const arr = props.map((element, index) => {
      return <Card
        urlImage={element.urlToImage}
        source={element.source.name}
        title={element.title}
        description={element.description}
        publishedAt={element.publishedAt}
        url={element.url}
        key={index}
        sendDataOfCurrentCard={func} />
    })
    return arr
  }


  if (props.firstLoad === true) {
    return (
      <div className={style.Cards}>
        Введите текст запроса
      </div>)
  } else {
    const arrOfNews = funcRender(props.dataArticlesForRender, props.sendDataOfCurrentCard)
    return (
      <div className={style.Cards}>
        {arrOfNews}
        {props.pagination()}
      </div>
    )
  }
}
export { PresentationCardsComponent };