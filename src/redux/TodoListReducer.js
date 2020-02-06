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
    //       opened: false,
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
const actionCreatorDeleteCard = (name) => ({
  type: DELETE_CARD,
  name: name
})
const actionCreatorChangeCard = (name) => ({
  type: CHANGE_CARD,
  name: name
})
const actionCreatorSelectCard = (name , index) => ({
  type: SELECT_CARD,
  name: name
})
const actionCreatorMoveCard = (name, number) => ({
  type: MOVE_CARD,
  name: name,
  number: number
})
//_____________________________________
const actionCreatorAddTodoItem = (name) => ({
  type: ADD_TODO_ITEM,
  name: name
})
const actionCreatorOpenTodoItem = (name, opened) => ({
  type: OPEN_TODO_ITEM,
  name: name,
  opened: opened
})

const actionCreatorChangeTodoItem = (name) => ({
  type: CHANGE_TODO_ITEM,
  name: name
})
const actionCreatorDeleteTodoItem = (name) => ({
  type: DELETE_TODO_ITEM,
  name: name
})
const actionCreatorSetTodoItemTime = (name, time) => ({
  type: SET_TODO_ITEM_TIME,
  name: name,
  time: time
})
const actionCreatorChangeTodoItemTime = (name, time) => ({
  type: CHANGE_TODO_ITEM_TIME,
  name: name,
  time: time
})
const actionCreatorSetTodoItemColor = (name, color) => ({
  type: SET_TODO_ITEM_COLOR,
  name: name,
  color: color
})
const actionCreatorChangeTodoItemColor = (name, color) => ({
  type: CHANGE_TODO_ITEM_COLOR,
  name: name,
  color: color
})
//_____________________________________
const actionCreatorAddTodoSubItem = (name) => ({
  type: ADD_TODO_SUBITEM,
  name: name,
})
const actionCreatorChangeTodoSubItem = (name) => ({
  type: CHANGE_TODO_SUBITEM,
  name: name,
})
const actionCreatorDeleteTodoSubItem = (name) => ({
  type: DELETE_TODO_SUBITEM,
  name: name,
})

const TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return ({
        ...state, cards:[...state.cards, {
          name:action.name,
          selected: false,
          todoItems: []
          }]
        }
      )
    case DELETE_CARD:
      return ({
        ...state,cards:[...state.cards].filter(item => !item.selected)
      })
    case CHANGE_CARD:
      return ({
        ...state, cards:[...state.cards].forEach(item => {if(item.selected){item.name = action.name}})
      })
    case SELECT_CARD:
      
      return ({
        ...state, cards:[...state.cards].map(item => {return (item.name == action.name)? {...item ,selected:true} : {...item, selected : false}})
      })
    case MOVE_CARD:
      return ({})
    case ADD_TODO_ITEM:
      return ({})
    case OPEN_TODO_ITEM:
      return ({})
    case CHANGE_TODO_ITEM:
      return ({})
    case DELETE_TODO_ITEM:
      return ({})
    case SET_TODO_ITEM_TIME:
      return ({})
    case CHANGE_TODO_ITEM_TIME:
      return ({})
    case SET_TODO_ITEM_COLOR:
      return ({})
    case CHANGE_TODO_ITEM_COLOR:
      return ({})
    case ADD_TODO_SUBITEM:
      return ({})
    case CHANGE_TODO_SUBITEM:
      return ({})
    case DELETE_TODO_SUBITEM:
      return ({})
    default:
      return state;
  }
}


export {TodoListReducer, actionCreatorAddCard, actionCreatorDeleteCard, actionCreatorChangeCard, actionCreatorSelectCard}


