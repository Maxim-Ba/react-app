import React, { useState } from 'react'
import style from './TodoItem.module.scss'
import { TodoItemProperties } from './TodoItemProperties/TodoItemProperties';
import { LiContainer } from './Li/LiContainer';

const TodoItemList = (props) => {
  const [isOpenField, setField] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const [valueName, setValue] = useState('');
  const [valueTime, setValueTime] = useState('');
  const [valueColor, setValueColor] = useState('');

  const addTodo = () => {
    setDisabled(true)
    setField(true)
  }
  const changeValue = (value) => {
    setValue(value)

  }
  const changeValueColor = (value) => {
    setValueColor(value)

  }
  const changeValueTime = (value) => {
    setValueTime(value)

  }
  const addTodoItem = () => {
    props.addTodo(valueName, props.index, valueTime, valueColor)
    setDisabled(false)
    setField(false)
    console.log(valueName, props.index, valueTime, valueColor)
  }

  const makeTodoItemList = (arr) => {
    if (arr.length !== 0) {
      return arr.map((todoItemListItem, index) => {
        return (<LiContainer key={index} index={index} parentIndex={props.index} {...todoItemListItem} />
        )
      })
    }
    return null
  }
  return (
    <div className={style.TodoItem}>
      <div>
        <ul>
          {makeTodoItemList(props.todoItemList)}
        </ul>
      </div>
      <button disabled={isDisabled} onClick={addTodo}>Добавить пункт</button>
      {isOpenField
      //make new Todo item
        ? <TodoItemProperties
          changeValue={changeValue}
          changeValueColor={changeValueColor}
          changeValueTime={changeValueTime}
          actionWithItem={addTodoItem}
          setTodoItemColor={props.setTodoItemColor}
          isNewItem={true}
          parentIndex={props.index}
        />
        : null}

    </div>
  )
}
export { TodoItemList }