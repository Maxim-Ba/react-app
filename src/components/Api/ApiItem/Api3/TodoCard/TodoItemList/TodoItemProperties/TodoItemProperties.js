import React, { useState } from 'react'
import style from './TodoItemProperties.module.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { reduxForm } from 'redux-form'

// const Form = (props) => {
//   return (
//     <form className={style.TodoItemProperties} >
//       <input
//         onChange={changeValue}
//         placeholder={'Название пункта'}
//         value={valueName} />
//       <fieldset>
//         <p>Цвет: </p>
//         <button className={style.TodoItemProperties__colorButton} color={'#FFC0CB'} onClick={props.setTodoItemColor} />
//         <button className={style.TodoItemProperties__colorButton} color={'#DC143C'} onClick={props.setTodoItemColor} />
//         <button className={style.TodoItemProperties__colorButton} color={'#ADFF2F'} onClick={props.setTodoItemColor} />
//         <button className={style.TodoItemProperties__colorButton} color={'#20B2AA'} onClick={props.setTodoItemColor} />
//         <button className={style.TodoItemProperties__colorButton} color={'#FFFF00'} onClick={props.setTodoItemColor} />
//         <button className={style.TodoItemProperties__colorButton} color={'#87CEEB'} onClick={props.setTodoItemColor} />
//         <button className={style.TodoItemProperties__colorButton} color={'#F5F5F5'} onClick={props.setTodoItemColor} />
//         <button className={style.TodoItemProperties__colorButton} color={'#808080'} onClick={props.setTodoItemColor} />
//       </fieldset>
//       <fieldset>
//         <p>Срок: {}</p>
//         <DatePicker />
//       </fieldset>
//       <button type='button' onClick={props.actionWithItem}>Добавить</button>
//     </form>
//   )
// }
// const ReduxForm = (props) => {
//   const onSubmit = (formData) => { console.log(formData.name) }
//   return <EditTodoItemForm onSubmit={onSubmit} />
// }
// const EditTodoItemForm = reduxForm({
//   form: 'todoItemForm'
// })(Form)



const TodoItemProperties = (props) => {
  const flag = props.isNewItem ? false : true
  if (flag) {
    let [valueName, setValueName] = useState(props.name)
    const changeValue = (e) => {
      setValueName(e.target.value)
    }
    let [valueColor, setValueColor] = useState(props.color)
    const changeValueColor = (e) => {
      setValueColor(e.target.getAttribute('color'))
    }
    let [valueTime, setValueTime] = useState(props.time)
    const changeValueTime=(timeValue)=>{
      setValueTime(timeValue)
    }
    const setChanges = () => {
      props.actionWithItem(valueName, props.parentIndex, props.index)
      props.changeTime(valueName, valueTime, props.parentIndex, props.index)
      props.changeColor(valueName, valueColor, props.parentIndex, props.index)
      props.open(valueName, props.parentIndex, props.index, false)
    }
    const deleteItem = () => {
      props.open(valueName, props.parentIndex, props.index, false)
      props.delete(props.name, props.parentIndex, props.index)
    }

    return (
      <form className={style.TodoItemProperties}>
        <input
          onChange={changeValue}
          placeholder={'Название пункта'}
          value={valueName} />
        <fieldset>
          <p>Цвет: <span style={{ backgroundColor: `${valueColor}`, width: `100px`, height: `10px`, display: `block` }} /></p>
          <button type='button' className={style.TodoItemProperties__colorButton} color={'#FFC0CB'} onClick={changeValueColor} style={{ backgroundColor: `#FFC0CB` }} />
          <button type='button' className={style.TodoItemProperties__colorButton} color={'#DC143C'} onClick={changeValueColor} style={{ backgroundColor: `#DC143C` }} />
          <button type='button' className={style.TodoItemProperties__colorButton} color={'#ADFF2F'} onClick={changeValueColor} style={{ backgroundColor: `#ADFF2F` }} />
          <button type='button' className={style.TodoItemProperties__colorButton} color={'#20B2AA'} onClick={changeValueColor} style={{ backgroundColor: `#20B2AA` }} />
          <button type='button' className={style.TodoItemProperties__colorButton} color={'#FFFF00'} onClick={changeValueColor} style={{ backgroundColor: `#FFFF00` }} />
          <button type='button' className={style.TodoItemProperties__colorButton} color={'#87CEEB'} onClick={changeValueColor} style={{ backgroundColor: `#87CEEB` }} />
          <button type='button' className={style.TodoItemProperties__colorButton} color={'#F5F5F5'} onClick={changeValueColor} style={{ backgroundColor: `#F5F5F5` }} />
          <button type='button' className={style.TodoItemProperties__colorButton} color={'#808080'} onClick={changeValueColor} style={{ backgroundColor: `#808080` }} />
        </fieldset>
        <fieldset>
        <p>Срок: {valueTime.getHours()} : {valueTime.getMinutes()}, {valueTime.getDate()} {valueTime.getMonth() + 1} {valueTime.getFullYear()}</p>
          <DatePicker
            selected={valueTime}
            onChange={date => changeValueTime(date)}
            timeInputLabel="Time:"
            timeFormat="HH:mm"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
          />
        </fieldset>
        <button type='button' onClick={setChanges}>Изменить</button>
        <button type='button' onClick={deleteItem}>Удалить</button>
      </form>
    )
  }



  //________create item_________
  const changeValue = (e) => {
    props.changeValue(e.target.value)
  }

  const [valueColor, setValueColor] = useState('#ffffff');
  props.changeValueColor(valueColor)
  const changeValueColor = (e) => {
    props.changeValueColor(e.target.getAttribute('color'))
    setValueColor(e.target.getAttribute('color'))
  }
  const [valueTime, setValueTime] = useState(new Date());
  props.changeValueTime(valueTime)
  const changeValueTime = (e) => {
    props.changeValueTime(e)
    setValueTime(e)
  }

  const setChanges = () => {
    props.actionWithItem()
  }

  return (
    <form className={style.TodoItemProperties}>
      <input
        onChange={changeValue}
        placeholder={'Название пункта'}
      />
      <fieldset>
        <p>Цвет: <span style={{ backgroundColor: `${valueColor}`, width: `100px`, height: `10px`, display: `block` }} /></p>
        <button type='button' className={style.TodoItemProperties__colorButton} color={'#FFC0CB'} onClick={changeValueColor} style={{ backgroundColor: `#FFC0CB` }} />
        <button type='button' className={style.TodoItemProperties__colorButton} color={'#DC143C'} onClick={changeValueColor} style={{ backgroundColor: `#DC143C` }} />
        <button type='button' className={style.TodoItemProperties__colorButton} color={'#ADFF2F'} onClick={changeValueColor} style={{ backgroundColor: `#ADFF2F` }} />
        <button type='button' className={style.TodoItemProperties__colorButton} color={'#20B2AA'} onClick={changeValueColor} style={{ backgroundColor: `#20B2AA` }} />
        <button type='button' className={style.TodoItemProperties__colorButton} color={'#FFFF00'} onClick={changeValueColor} style={{ backgroundColor: `#FFFF00` }} />
        <button type='button' className={style.TodoItemProperties__colorButton} color={'#87CEEB'} onClick={changeValueColor} style={{ backgroundColor: `#87CEEB` }} />
        <button type='button' className={style.TodoItemProperties__colorButton} color={'#F5F5F5'} onClick={changeValueColor} style={{ backgroundColor: `#F5F5F5` }} />
        <button type='button' className={style.TodoItemProperties__colorButton} color={'#808080'} onClick={changeValueColor} style={{ backgroundColor: `#808080` }} />
      </fieldset>
      <fieldset>
        <p>Срок: {valueTime.getHours()} : {valueTime.getMinutes()}, {valueTime.getDate()} {valueTime.getMonth() + 1} {valueTime.getFullYear()}</p>
        <DatePicker
          selected={valueTime}
          onChange={date => changeValueTime(date)}
          timeInputLabel="Time:"
          dateFormat="MM/dd/yyyy h:mm aa"
          timeFormat="HH:mm"
          showTimeInput
        />
      </fieldset>
      <button type='button' onClick={setChanges}>Добавить</button>
    </form>
  )
}


export { TodoItemProperties }