const initialState = {
  wether: {
    title: 'Wether Api',
    name: 'Wether Api',
    input: '',
    data: null,
    link: '/Api/Api2'
  },
  queryInProgress: false,
  isFetching: false,
}


const GET_WETHER_INFO = 'GET_WETHER_INFO';
const QUERY_IN_PROGRESS = 'QUERY_IN_PROGRESS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const actionCreatorGetCity = (data)=>({ 
    type : GET_WETHER_INFO,
    data :data
})
const actionCreatorToggleIsFeatching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching
})
const actionCreatorQueryInProgress = (queryInProgress) => ({
  type: QUERY_IN_PROGRESS,
  queryInProgress: queryInProgress
})
// const getWetherThunk = (city) => {
//   return (dispatch) => {
//     dispatch(actionCreatorToggleIsFeatching(true))
//     dispatch(actionCreatorQueryInProgress(true))
//     getInformationApi(value)
//       .then(res => {
//         if (res.statusText === 'OK') {
//           return res;
//         }
//       })
//       .then(res => {
//         dispatch(actionCreatorToggleIsFeatching(false))
//         dispatch(actionCreatorSetNews(res.data.articles));
//         dispatch(actionCreatorQueryInProgress(false))
        
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatch(actionCreatorToggleIsFeatching(false))
//         dispatch(actionCreatorQueryInProgress(false))
//         if (err == 'TypeError: Failed to fetch') {
//           err = `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`;
//         }
//       });
//   }
// }

const wetherReducerApi = (state = initialState, action) =>{
  switch (action.type) {
    case GET_WETHER_INFO:
      return {...state,data: action.data}
    default:
      return state;
  }
}