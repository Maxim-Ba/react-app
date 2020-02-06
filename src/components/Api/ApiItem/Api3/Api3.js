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
  
  const cardsArrayForRender = (arr, func) =>{
    if (arr.length!==0) {
      return arr.map((item, index) => {return <TodoCard index={index} key={index} {...item} func={func}/> }) ;
    }
  }

  return (
    <div >
      <h3>Приложение по сотавлению списка задач</h3>
      <div>
        <section>
          <p >Добавить колонку</p>
          <p>Изменить колонку</p>
          <p>Удалить колонку</p>
        </section>
        <div className={style.Api3__wraper}>
        {cardsArrayForRender(props.arrCards.cards, props.selectCard)}
        </div>
          
      </div>
    </div>
  )
}

export { Api3 };