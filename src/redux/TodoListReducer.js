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
const actionCreatorDeleteCard = () => ({
  type: DELETE_CARD,
})
const actionCreatorChangeCard = (name) => ({
  type: CHANGE_CARD,
  name: name
})
const actionCreatorSelectCard = (name , index) => ({
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
      console.log({
        ...state,cards:[...state.cards].filter(item => {return (!item.selected)}).map(item=>{return{...item}})
      })
      return ({
        ...state,cards:[...state.cards].filter(item => {return (!item.selected)}).map(item=>item)
      })
    case CHANGE_CARD:
      return ({
        ...state, cards:[...state.cards].map(item => {
          if(item.selected){
            return ({...item ,name: action.name}) 
          }
          return {...item}
      })})
    case SELECT_CARD:
      return ({
        ...state, cards:[...state.cards].map((item, index) => {return ((item.name == action.name) && (index == action.index))? {...item ,selected: true} : {...item, selected : false}})
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


