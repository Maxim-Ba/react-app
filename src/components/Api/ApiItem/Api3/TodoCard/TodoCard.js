import React from 'react';
import style from './TodoCard.module.scss';

const TodoCard = (props) => {
  console.log(props)

  const onHandleClick = (e) => {
    return props.func(props.name)
  }

  return (
    <section onClick={onHandleClick} className={props.selected ? (style.TodoCard + ' ' + style.TodoCard__selected) : style.TodoCard}>
      <header>
        Заголовок карточки
          </header>
      <div>
        <p>
          {props.name}
        </p>
      </div>
    </section>

  )
}

export { TodoCard }