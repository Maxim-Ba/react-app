import { connect } from 'react-redux';
import { Li } from './Li';
import { actionCreatorOpenTodoItem, actionCreatorChangeTodoItem, actionCreatorDeleteTodoItem, actionCreatorSetTodoItemTime, actionCreatorChangeTodoItemTime, actionCreatorSetTodoItemColor, actionCreatorChangeTodoItemColor } from '../../../../../../../redux/TodoListReducer';

const mapStateToProps =(state, ownProps)=>{
  return{
    parentIndex: ownProps.parentIndex,
    index: ownProps.index,
    color: ownProps.color,
    time: ownProps.time,
    name: ownProps.name,
    opened: ownProps.opened,
    
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
    open: (name, index, indexTodo, opened)=>{
      dispatch(actionCreatorOpenTodoItem(name, index, indexTodo, opened))
    },
    change: (name, index, indexTodo)=>{
      dispatch(actionCreatorChangeTodoItem(name, index, indexTodo))
    },
    delete: (name, index, indexTodo)=>{
      dispatch(actionCreatorDeleteTodoItem(name, index, indexTodo))
    },
    setTime: (name, time, index, indexTodo)=>{
      dispatch(actionCreatorSetTodoItemTime(name, time, index, indexTodo))
    },
    changeTime: (name, time, index, indexTodo)=>{
      dispatch(actionCreatorChangeTodoItemTime(name, time, index, indexTodo))
    },
    setColor: (name, color, index, indexTodo)=>{
      dispatch(actionCreatorSetTodoItemColor(name, color, index, indexTodo))
    },
    changeColor: (name, color, index, indexTodo)=>{
      dispatch(actionCreatorChangeTodoItemColor(name, color, index, indexTodo))
    },
    
  }
}
const LiContainer = connect(mapStateToProps, mapDispatchToProps)(Li)
export { LiContainer }