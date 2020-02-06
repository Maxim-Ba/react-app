import React,{useState} from 'react';
import style from './TodoCard.module.scss';

const TodoCard = (props) => {
  const [isOpenedRenameCardField, setIsOpenedRenameCardField] = useState(false);
  // const state = {
  //   name: props.name,
  //   isOpenedRenameCardField: false,
  // }
  const onHandleClick = (e) => {
    console.log(props)

    if (e.currentTarget === e.target) {
      return props.selectCard(props.name, props.index)
    }
  }
  const renameCardField = React.createRef();
  const renameCard = () => {
    props.selectCard(props.name, props.index)
    props.changeCard(renameCardField.current.value)
    return closeRenameCardField()
    
  }
  const openedRenameCardField =()=>{
    return setIsOpenedRenameCardField(true)
  }
  const closeRenameCardField = ()=>{
    return setIsOpenedRenameCardField(false)
  }
  // isOpenedRenameCardField сделать форму, и убрать createRef
  return (
    <section onClick={onHandleClick} className={props.selected ? (style.TodoCard + ' ' + style.TodoCard__selected) : style.TodoCard}>
      {
        isOpenedRenameCardField
          ? [<input key={'field'} ref={renameCardField} onSubmit={renameCard}></input>,
              <button key={'Close'} onClick={closeRenameCardField}>Close</button>,
              <button key={'Input'} onClick={renameCard}>Input</button>]
          : [<header key={'header'} onDoubleClick={openedRenameCardField}>{props.name}</header>,
              <button key={'button'} onClick={openedRenameCardField}>Rename</button>]
      }
      
      <div>
        <p>
        </p>
      </div>
    </section>

  )
}

export { TodoCard }