import { connect } from 'react-redux';
import { Api3 } from './Api3';
import { actionCreatorAddCard, actionCreatorDeleteCard, actionCreatorChangeCard, actionCreatorSelectCard, actionCreatorAddTodoItem, actionCreatorOpenTodoItem, actionCreatorNewOrderCards} from '../../../../redux/TodoListReducer';

const mapStateToProps = (state) => ({
  arrCards : state.todo
})

const mapDispatchToProps = (dispatch) => {
  return {
    addCard : (name) => {
      const action = actionCreatorAddCard(name)
      dispatch(action)
    },
    deleteCard : (name) => {
      const action = actionCreatorDeleteCard(name)
      dispatch(action)
    },
    changeCard : (name) => {
      const action = actionCreatorChangeCard(name)
      dispatch(action)
    },
    selectCard : (name, index) => {
      const action = actionCreatorSelectCard(name, index)
      dispatch(action)
    },
    addTodo: (name, index, time, color) =>{
      dispatch(actionCreatorAddTodoItem(name, index, time, color))
    },
    changeOrderCards: (newArray) =>{
      dispatch(actionCreatorNewOrderCards(newArray))
    }

  }
}
  const ContainerApi3 = connect(mapStateToProps, mapDispatchToProps)(Api3)

export { ContainerApi3 };