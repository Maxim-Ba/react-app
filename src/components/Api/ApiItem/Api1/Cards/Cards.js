import React from 'react';
import style from './Cards.module.scss'
import { Card } from './Card/Card';

class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.makeListOfCards = this.makeListOfCards.bind(this)
  }
  makeListOfCards(){
    if (this.props.data.data === 'DATA'){
      return (<p> Введите что искать в поле</p>)
    }
    if ((typeof this.props.data.data) === 'Object') {
      const arrayOfCards = this.props.data.data.map((item)=>{
        <Card urlToImage={item.urlToImage} title={item.title} description={item.description} url={item.url} publishedAt={item.publishedAt} key={item.title}/>
      })
      return arrayOfCards;
    } 
  }
  render() {
    return (
      <section className={style.Cards}>
        {this.makeListOfCards()}
      </section>)
  }
}

export { Cards };