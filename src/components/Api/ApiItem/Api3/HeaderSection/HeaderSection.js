import React, { useRef } from 'react'
import style from './HeaderSection.module.scss'

const HeaderSection = (props) => {
  const nameOfNewCard = useRef(null)
  const onButtonClick= ()=>{
    props.addCard(nameOfNewCard.current.value)
    props.closeField()
  }
  return (
    <section className={style.HeaderSection}>
      {props.isOpenField 
      ? <form>
          <input placeholder={'Напишите имя колонки'} ref={nameOfNewCard}></input>
          <button type='button' onClick={onButtonClick}>Добавить колонку</button> 
        </form>
      : <button onClick={props.onpenField}>Добавить колонку</button>}
      <button>Изменить колонку</button>
      <button onClick={props.deleteCard}>Удалить колонку</button>
    </section>
  )
}
export { HeaderSection }