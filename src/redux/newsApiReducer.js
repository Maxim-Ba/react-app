import { NewsApi } from '../modules/APIs/NewsApi'
const initialState = {
  title: 'News Api',
  name: 'News Api',
  input: '',
  data: { data: 'DATA' },
  link: '/Api/Api1'
}
const FIND_NEWS = 'FIND_NEWS';
const CHANGE_VALUE_INPUT = 'CHANGE_VALUE_INPUT';
const newsApi = new NewsApi();
const actionCreatorFindNews = (string) => ({
  type: FIND_NEWS,
  string: string
})
const actionCreatorInputForm = (event) => ({
  type: CHANGE_VALUE_INPUT,
  event: event
})
const newsApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_NEWS:
      newsApi.getArticlesInformation(action.string)
        .then(res => {
          state.data.data = res
          console.log(state.data.data)
          return state;
        })
        .catch((err) => {
          console.log(err);
          if (err == 'TypeError: Failed to fetch') {
            err = `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`;
          }
        });
              // доделать отображение ошибки
      break;
    case CHANGE_VALUE_INPUT:
      const target = action.event.target;
      const value = target.value;
      state.input = value;
      return state;
    default:
      return state;
  }

}

export { newsApiReducer, actionCreatorFindNews, actionCreatorInputForm }