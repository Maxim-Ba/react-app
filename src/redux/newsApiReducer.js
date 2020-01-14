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
}

const SET_NEWS = 'SET_NEWS';
const CHANGE_VALUE_INPUT = 'CHANGE_VALUE_INPUT';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const CHANGE_CURRENT_CARD = 'CHANGE_CURRENT_CARD';

const actionCreatorSetNews = (news) => ({
  type: SET_NEWS,
  news: news
})
const actionCreatorInputForm = (event) => ({
  type: CHANGE_VALUE_INPUT,
  event: event
})
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

const newsApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      const stateNew = {
        ...state,
        apiOfNews: {
          ...state.apiOfNews,
          data: {
            ...state.apiOfNews.data,
            data: { ...state.apiOfNews.data.data }
          }
        }
      }
      stateNew.apiOfNews.data.data = action.news
      stateNew.totalArticlesCount = action.news.length
      return stateNew
    case CHANGE_VALUE_INPUT:
      const target = action.event.target;
      const value = target.value;
      const stateCopy = {
        ...state,
        apiOfNews: { ...state.apiOfNews },
        input: { ...state.apiOfNews.input }
      }
      // stateCopy.apiOfNews = {...state.apiOfNews}
      // stateCopy.apiOfNews.input = {...state.apiOfNews.input}
      stateCopy.apiOfNews.input = value;
      return stateCopy;
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case CHANGE_CURRENT_CARD:
      return { ...state, currentCard: action.data };
    default:
      return state;
  }

}

export { newsApiReducer, actionCreatorSetNews, actionCreatorInputForm, actionCreatorChangeurrentPage, actionCreatorToggleIsFeatching, actionCreatorsendDataOfCurrentCard }