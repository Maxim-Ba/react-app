import React from 'react';
import style from './FormCard.module.scss'
const FormCard = (props) => {
  const inputRef = React.createRef()
  const onhandleClick = ()=>{
    props.renameCard(inputRef.current.value)
  }
  return (
    <form className={style.FormCard}>
      <input ref={inputRef}/>
      <button onClick={props.closeRenameCardField}>Close</button>
      <button type='button' onClick={onhandleClick}>Input</button>
    </form>
  )
}
export {FormCard};