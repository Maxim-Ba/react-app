import React from 'react'
import { TodoItemProperties } from '../TodoItemProperties/TodoItemProperties'
const Li = (props) => {
  const openTodoItem =()=>{
    props.open(props.name, props.parentIndex, props.index, true)
  }
  return (
    <li style={{backgroundColor: `${props.color}`}}>
      {props.opened ? <TodoItemProperties actionWithItem={props.change} {...props}/> : null}
      <div>{props.name}</div>
      <button onClick={openTodoItem}>Редактировать</button>
    </li>
  )
}
export { Li }