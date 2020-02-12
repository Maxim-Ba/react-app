import React, { useState } from 'react';
import style from './TodoCard.module.scss';
import { FormCard } from './FormCard/FormCard';
import { TodoItemList } from './TodoItemList/TodoItemList';


const TodoCard = (props) => {
  const [isOpenedRenameCardField, setIsOpenedRenameCardField] = useState(false);
  const onHandleClick = (e) => {

    if (e.currentTarget === e.target) {
      return props.selectCard(props.name, props.index)
    }
  }
  const renameCard = (value) => {
    props.selectCard(props.name, props.index)
    props.changeCard(value)
    return closeRenameCardField()
  }
  const openedRenameCardField = () => {
    return setIsOpenedRenameCardField(true)
  }
  const closeRenameCardField = () => {
    return setIsOpenedRenameCardField(false)
  }
  return (
    <section onClick={onHandleClick} className={props.selected ? (style.TodoCard + ' ' + style.TodoCard__selected) : style.TodoCard}>
      {
        isOpenedRenameCardField
          ? <FormCard renameCard={renameCard} closeRenameCardField={closeRenameCardField} />
          : <div className={style.TodoCard__topOfHead}>
              <header>{props.name}</header>
              <button  onClick={openedRenameCardField}>Rename</button>
            </div>
      }
      <div>
        <TodoItemList
          addTodo={props.addTodo}
          todoItemList={props.todoItems}
          index={props.index}/>
      </div>
    </section>

  )
}

export { TodoCard }