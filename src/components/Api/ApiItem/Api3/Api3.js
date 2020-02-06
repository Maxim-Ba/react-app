import React from 'react';
import { TodoCard } from './TodoCard/TodoCard';
import style from './Api3.module.scss';

const Api3 = (props) => {
  if (props.arrCards.cards.length == 0) {
    props.addCard('123')
  }
  if (props.arrCards.cards.length == 1) {
    props.addCard('456')
  }
  if (props.arrCards.cards.length == 2) {
    props.addCard('bnmbnm')
  }
  if (props.arrCards.cards.length == 3) {
    props.addCard('4')
  }

  
  const cardsArrayForRender = (arr, func, changeCard ) =>{
    if (arr.length!==0) {
      return arr.map((item, index) => {return <TodoCard index={index} key={index} {...item} selectCard={func} changeCard={changeCard}/> }) ;
    }
  }

  return (
    <div >
      <h3>Приложение по сотавлению списка задач</h3>
      <div>
        <section>
          <p>Добавить колонку</p>
          <p>Изменить колонку</p>
          <p>Удалить колонку</p>
        </section>
        <div className={style.Api3__wraper}>
        {cardsArrayForRender(props.arrCards.cards, props.selectCard, props.changeCard)}
        </div>
          
      </div>
    </div>
  )
}

export { Api3 };