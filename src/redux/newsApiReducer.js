import { getInformationApi } from "../modules/APIs/NewsApi";

const initialState = {
  apiOfNews: {
    title: 'News Api',
    name: 'News Api',
    input: '',
    data: { data: ['DATA'] },
    link: '/Api/Api1'
  },
  pageSize: 6,
  totalArticlesCount: 0,
  currentPage: 1,
  isFetching: false,
  currentCard: {},
  queryInProgress: false,
}

const SET_NEWS = 'SET_NEWS';
const CHANGE_VALUE_INPUT = 'CHANGE_VALUE_INPUT';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const CHANGE_CURRENT_CARD = 'CHANGE_CURRENT_CARD';
const QUERY_IN_PROGRESS = 'QUERY_IN_PROGRESS'

const actionCreatorSetNews = (news) => ({
  type: SET_NEWS,
  news: news
})
const actionCreatorInputForm = (event) => {
  return {
  type: CHANGE_VALUE_INPUT,
  value: event.target.value
}}
const actionCreatorChangeurrentPage = (page) => ({
  type: CHANGE_CURRENT_PAGE,
  currentPage: page
})
const actionCreatorToggleIsFeatching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching
})
const actionCreatorsendDataOfCurrentCard = (data) => ({
  type: CHANGE_CURRENT_CARD,
  data: data
})
const actionCreatorQueryInProgress = (queryInProgress) => ({
  type: QUERY_IN_PROGRESS,
  queryInProgress: queryInProgress
})

const getNewsThunk = (value) => {
  return (dispatch) => {
    dispatch(actionCreatorToggleIsFeatching(true))
    dispatch(actionCreatorQueryInProgress(true))
    getInformationApi(value)
      .then(res => {
        dispatch(actionCreatorToggleIsFeatching(false))
        dispatch(actionCreatorQueryInProgress(false))
        actionCreatorSetNews(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
        dispatch(actionCreatorToggleIsFeatching(false))
        dispatch(actionCreatorQueryInProgress(false))
        if (err == 'TypeError: Failed to fetch') {
          err = `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`;
        }
      });
  }
}

const newsApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      console.log(action);
      // const stateNew = {
      return {
        ...state,
        apiOfNews: {
          ...state.apiOfNews,
          data: {
            ...state.apiOfNews.data,
            data: action.news 
          }
        },
        totalArticlesCount: action.news.length
      }
      // stateNew.apiOfNews.data.data = action.news
      // stateNew.totalArticlesCount = action.news.length
      // return stateNew
    case CHANGE_VALUE_INPUT:
      // const target = action.event.target;
      // const value = target.value;
      // const stateCopy = {
      return {
        ...state,
        apiOfNews: { ...state.apiOfNews },
        input: action.value 
      }
      // stateCopy.apiOfNews = {...state.apiOfNews}
      // stateCopy.apiOfNews.input = {...state.apiOfNews.input}
      // stateCopy.apiOfNews.input = value;
      // return stateCopy;
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case CHANGE_CURRENT_CARD:
      return { ...state, currentCard: action.data };
    case QUERY_IN_PROGRESS:
      return { ...state, queryInProgress: action.queryInProgress };
    default:
      return state;
  }

}
export { getNewsThunk }
export { newsApiReducer, actionCreatorSetNews, actionCreatorInputForm, actionCreatorChangeurrentPage, actionCreatorToggleIsFeatching, actionCreatorsendDataOfCurrentCard, actionCreatorQueryInProgress }