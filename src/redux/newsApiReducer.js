import { NewsApi } from '../modules/APIs/NewsApi'
import * as axios from 'axios';
const initialState = {
  apiOfNews: {
    title: 'News Api',
    name: 'News Api',
    input: '',
    data: { data: 'DATA' },
    link: '/Api/Api1'
  }
}





const SET_NEWS = 'SET_NEWS';
const FIND_NEWS = 'FIND_NEWS';
const CHANGE_VALUE_INPUT = 'CHANGE_VALUE_INPUT';
const actionCreatorSetNews = (news) => ({
  type: SET_NEWS,
  news: news
})
const actionCreatorInputForm = (event) => ({
  type: CHANGE_VALUE_INPUT,
  event: event
})
const newsApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      const stateNew = { ...state,
        apiOfNews: { ...state.apiOfNews,
          data: {...state.apiOfNews.data,
            data: {...state.apiOfNews.data.data}}}}
            stateNew.apiOfNews.data.data = action.news  
      return stateNew
           // доделать отображение ошибки
    case CHANGE_VALUE_INPUT:
      const target = action.event.target;
      const value = target.value;
      const stateCopy = {...state, 
        apiOfNews:{...state.apiOfNews},
        input:{...state.apiOfNews.input}
      }
      // stateCopy.apiOfNews = {...state.apiOfNews}
      // stateCopy.apiOfNews.input = {...state.apiOfNews.input}
      stateCopy.apiOfNews.input = value;
      return stateCopy;
    default:
      return state;
  }

}

export { newsApiReducer, actionCreatorSetNews, actionCreatorInputForm }