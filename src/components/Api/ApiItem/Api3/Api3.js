import React, {useState} from 'react';
import { TodoCard } from './TodoCard/TodoCard';
import style from './Api3.module.scss';

const Api3 = (props) => {
  const [isOpenField, setField] = useState(false)

  
  const cardsArrayForRender = (arr, func, changeCard ) =>{
    if (arr.length!==0) {
      return arr.map((item, index) => {return <TodoCard index={index} key={index} {...item} selectCard={func} changeCard={changeCard}/> }) ;
    }
  }
  const onpenField = ()=>{
    return setField(true)
  }
  const addCard = (e)=>{
    console.log(e.currentTarget.value)
    props.addCard(e.currentTarget.value)
    return setField(false)
  }
  const deleteCard = ()=>{
    props.deleteCard()
  }
  return (
    <div >
      <h3>Приложение по сотавлению списка задач</h3>
      <div>
        <section>
          {isOpenField ? <input onDoubleClick={addCard}></input> :<p onClick={onpenField}>Добавить колонку</p>}
          <p>Изменить колонку</p>
          <p onClick={deleteCard}>Удалить колонку</p>
        </section>
        <div className={style.Api3__wraper}>
        {cardsArrayForRender(props.arrCards.cards, props.selectCard, props.changeCard)}
        </div>
          
      </div>
    </div>
  )
}

export { Api3 };