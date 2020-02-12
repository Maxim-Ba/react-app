import actions from "redux-form/lib/actions";

const initialState = {
  cards: [
    // {
    //   name: name,
    //   selected: true,
    //   todoItems: [
    //     {
    //       color: '#ffffff',
    //       time: '',
    //       name: name,
    //       subItems: [],
    //     }
    //   ],
    // }
  ],

}
//CARD
const ADD_CARD = 'ADD_CARD';
const DELETE_CARD = 'DELETE_CARD';
const CHANGE_CARD = 'CHANGE_CARD';
const SELECT_CARD = 'SELECT_CARD';
const MOVE_CARD = 'MOVE_CARD';
//ITEM
const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
const OPEN_TODO_ITEM = 'OPEN_TODO_ITEM';
const CHANGE_TODO_ITEM = 'CHANGE_TODO_ITEM';
const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
const SET_TODO_ITEM_TIME = 'SET_TODO_ITEM_TIME';
const CHANGE_TODO_ITEM_TIME = 'CHANGE_TODO_ITEM_TIME';
const SET_TODO_ITEM_COLOR = 'SET_TODO_ITEM_COLOR';
const CHANGE_TODO_ITEM_COLOR = 'CHANGE_TODO_ITEM_COLOR';
//SUBITEM
const ADD_TODO_SUBITEM = 'ADD_TODO_SUBITEM';
const CHANGE_TODO_SUBITEM = 'CHANGE_TODO_SUBITEM';
const DELETE_TODO_SUBITEM = 'DELETE_TODO_SUBITEM';

const actionCreatorAddCard = (name) => ({
  type: ADD_CARD,
  name: name
})
const actionCreatorDeleteCard = () => ({
  type: DELETE_CARD,
})
const actionCreatorChangeCard = (name) => ({
  type: CHANGE_CARD,
  name: name
})
const actionCreatorSelectCard = (name, index) => ({
  type: SELECT_CARD,
  name: name,
  index: index
})
const actionCreatorMoveCard = (name, index) => ({
  type: MOVE_CARD,
  name: name,
  index: index
})
//_____________________________________
const actionCreatorAddTodoItem = (name, index, time, color) => ({
  type: ADD_TODO_ITEM,
  name: name,
  index: index,
  time:time,
  color:color
})
//____________OPEN_____________
const actionCreatorOpenTodoItem = (name, index, indexTodo, opened) => ({
  type: OPEN_TODO_ITEM,
  name: name,
  index: index,
  indexTodo: indexTodo,
  opened: opened
})
const actionCreatorChangeTodoItem = (name, index, indexTodo) => ({
  type: CHANGE_TODO_ITEM,
  name: name,
  index: index,
  indexTodo: indexTodo
})
const actionCreatorDeleteTodoItem = (name, index, indexTodo) => ({
  type: DELETE_TODO_ITEM,
  name: name,
  index: index,
  indexTodo: indexTodo
})
const actionCreatorSetTodoItemTime = (name, time, index, indexTodo) => ({
  type: SET_TODO_ITEM_TIME,
  name: name,
  time: time,
  index: index,
  indexTodo: indexTodo
})
const actionCreatorChangeTodoItemTime = (name, time, index, indexTodo) => ({
  type: CHANGE_TODO_ITEM_TIME,
  name: name,
  time: time,
  index: index,
  indexTodo: indexTodo
})
const actionCreatorSetTodoItemColor = (name, color, index, indexTodo) => ({
  type: SET_TODO_ITEM_COLOR,
  name: name,
  color: color,
  index: index,
  indexTodo: indexTodo
})
const actionCreatorChangeTodoItemColor = (name, color, index, indexTodo) => ({
  type: CHANGE_TODO_ITEM_COLOR,
  name: name,
  color: color,
  index: index,
  indexTodo: indexTodo
})
//_____________________________________


const TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return ({
        ...state, cards: [...state.cards, {
          name: action.name,
          selected: false,
          todoItems: []
        }]
      }
      )
    case DELETE_CARD:
      return ({
        ...state, cards: [...state.cards].filter(item => { return (!item.selected) }).map(item => item)
      })
    case CHANGE_CARD:
      return ({
        ...state, cards: [...state.cards].map(item => {
          if (item.selected) {
            return ({ ...item, name: action.name })
          }
          return { ...item }
        })
      })
    case SELECT_CARD:
      return ({
        ...state, cards: [...state.cards].map((item, index) => { return ((item.name == action.name) && (index == action.index)) ? { ...item, selected: true } : { ...item, selected: false } })
      })
    case MOVE_CARD:
      return ({})
    case ADD_TODO_ITEM:
      return ({
        ...state, cards: [...state.cards]
          .map((item, index) => {
            return ((index == action.index))
              ? {
                ...item, todoItems: [
                  ...item.todoItems, {
                    color: action.color,
                    time: action.time,
                    name: action.name,
                    subItems: [],
                    opened: false,
                  }]
              }
              : item 
          })
      }
      )
    case OPEN_TODO_ITEM:
      return ({
        ...state, cards: [...state.cards]
          .map((item, index) => {
            return (index == action.index)
              ? {
                ...item, todoItems: [...item.todoItems]
                  .map((jItem, jIndex) => {
                    if (jIndex == action.indexTodo) {
                      return ({ ...jItem, opened: action.opened })
                    }
                    return jItem 
                  })
              }
              : item 
          })
      })
    case CHANGE_TODO_ITEM:
      return ({
        ...state, cards: [...state.cards]
          .map((item, index) => {
            return ((index == action.index))
              ? {
                ...item, todoItems: [...item.todoItems]
                  .map((jItem, jIndex) => {
                    if (jIndex == action.indexTodo) {
                      return ({ ...jItem, name: action.name })
                    }
                    return jItem 
                  })
              }
              : item
          })
      })
    case DELETE_TODO_ITEM:
      return ({
        ...state, cards: [...state.cards]
          .map((item, index) => {
            return ((index == action.index))
              ? {
                ...item, todoItems: [...item.todoItems]
                  .filter((jItem, jIndex)=>{return jIndex !== action.indexTodo})
                  .map(a => a)
              }
              : item
          })
      })
    case SET_TODO_ITEM_TIME:
      return ({
        ...state, cards: [...state.cards]
          .map((item, index) => {
            return ((index == action.index))
              ? {
                ...item, todoItems: [...item.todoItems]
                  .map((jItem, jIndex) => {
                    if (jIndex == action.indexTodo) {
                      return ({ ...jItem, time: action.time })
                    }
                    return jItem 
                  })
              }
              : item
          })
      })
    case CHANGE_TODO_ITEM_TIME:
      return ({
        ...state, cards: [...state.cards]
          .map((item, index) => {
            return ((index == action.index))
              ? {
                ...item, todoItems: [...item.todoItems]
                  .map((jItem, jIndex) => {
                    if (jIndex == action.indexTodo) {
                      return ({ ...jItem, time: action.time })
                    }
                    return jItem 
                  })
              }
              : item
          })
      })
    case SET_TODO_ITEM_COLOR:
      return ({
        ...state, cards: [...state.cards]
          .map((item, index) => {
            return ((index == action.index))
              ? {
                ...item, todoItems: [...item.todoItems]
                  .map((jItem, jIndex) => {
                    if (jIndex == action.indexTodo) {
                      return ({ ...jItem, color: action.color })
                    }
                    return jItem 
                  })
              }
              : item
          })
      })
    case CHANGE_TODO_ITEM_COLOR:
      return ({
        ...state, cards: [...state.cards]
          .map((item, index) => {
            return ((index == action.index))
              ? {
                ...item, todoItems: [...item.todoItems]
                  .map((jItem, jIndex) => {
                    if (jIndex == action.indexTodo) {
                      return ({ ...jItem, color: action.color })
                    }
                    return jItem 
                  })
              }
              : item
          })
      })
    default:
      return state;
  }
}


export {
  TodoListReducer,
  actionCreatorAddCard,
  actionCreatorDeleteCard,
  actionCreatorChangeCard,
  actionCreatorSelectCard,
  actionCreatorAddTodoItem,
  actionCreatorOpenTodoItem,
  actionCreatorChangeTodoItem,
  actionCreatorDeleteTodoItem,
  actionCreatorSetTodoItemTime,
  actionCreatorChangeTodoItemTime,
  actionCreatorSetTodoItemColor,
  actionCreatorChangeTodoItemColor
}


