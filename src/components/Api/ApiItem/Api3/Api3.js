import React, { useState } from 'react';
import { TodoCard } from './TodoCard/TodoCard';
import style from './Api3.module.scss';
import { HeaderSection } from './HeaderSection/HeaderSection';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Api3 = (props) => {
  const [isOpenField, setField] = useState(false)


  const cardsArrayForRender = (arr, func, changeCard, addTodo, setTodoItemColor, changeTodo, openTodo) => {
    if (arr.length !== 0) {
      return arr.map((item, index) => {
        return <TodoCard
          index={index}
          key={index}
          {...item}
          selectCard={func}
          changeCard={changeCard}
          addTodo={addTodo}
          setTodoItemColor={setTodoItemColor}
          changeTodo={changeTodo}
          openTodo={openTodo}
        />
      });
    }
  }
  const onpenField = () => {
    return setField(true)
  }
  const closeField = () => {
    return setField(false)
  }
  const addCard = (value) => {
    props.addCard(value)
  }
  const deleteCard = () => {
    props.deleteCard()
  }
  const onDragEnd = (result) => {

  }
  return (
    <DragDropContext
      // onDragStart={}
      // onDragUpdate={}
      onDragEnd={onDragEnd}
    //reorder list
    >
      <div >
        <h3>Приложение по сотавлению списка задач</h3>
        <div>
          <HeaderSection isOpenField={isOpenField} addCard={addCard} onpenField={onpenField} closeField={closeField} deleteCard={deleteCard} />
          
            <Droppable droppableId={'1'}>
              {provided => (
                <div className={style.Api3__wraper} {...provided.dropableProps} ref={provided.innerRef}>
                  {cardsArrayForRender(
                    props.arrCards.cards,
                    props.selectCard,
                    props.changeCard,
                    props.addTodo,
                    props.setTodoItemColor,
                    props.changeTodo,
                    props.openTodo,
                  )}
                </div>
              )}

            
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  )
}

export { Api3 };