import { getWetherData, getIP } from "../modules/APIs/WetherApi";

const initialState = {
  title: 'Wether Api',
  name: 'Wether Api',
  link: '/Api/Api2',
  wether: {
    data: null,
    isFetching: true,
    err: null,
  },
  wetherInCity: {
    queryInProgress: false,
    isFetching: false,
    wetherInCity: null,
    err: null,
  }
}

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const QUERY_IN_PROGRESS_CITY = 'QUERY_IN_PROGRESS_CITY';
const TOGGLE_IS_FETCHING_CITY = 'TOGGLE_IS_FETCHING_CITY';
const SET_WETHER_DATA_IN_CITY = 'SET_WETHER_DATA_IN_CITY';
const SET_WETHER_INFO = 'SET_WETHER_INFO';
const SET_ERROR = 'SET_ERROR';
const SET_ERROR_CITY = 'SET_ERROR_CITY';

const actionCreatorSetReqestError = (err) => ({
  type: SET_ERROR,
  err: err
})
const actionCreatorSetReqestErrorCity = (err) => ({
  type: SET_ERROR_CITY,
  err: err
})
const actionCreatorToggleIsFeatching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching
})
const actionCreatorToggleIsFeatchingCity = (isFetching) => ({
  type: TOGGLE_IS_FETCHING_CITY,
  isFetching: isFetching
})
const actionCreatorQueryInProgress = (queryInProgress) => ({
  type: QUERY_IN_PROGRESS_CITY,
  queryInProgress: queryInProgress
})
const actionCreatorSetWether = (data) => ({
  type: SET_WETHER_INFO,
  data: data
})
const actionCreatorSetWetherInCity = (wetherInCity) => ({
  type: SET_WETHER_DATA_IN_CITY,
  wetherInCity: wetherInCity
})

const getWetherCityThunk = (city) => {
  return (dispatch) => {
    dispatch(actionCreatorToggleIsFeatchingCity(true))
    dispatch(actionCreatorQueryInProgress(true))
    dispatch(actionCreatorSetReqestErrorCity(null))
    getWetherData(city)
      .then(res => {
        if (res.err) {
          console.log(res.err);
          dispatch(actionCreatorSetReqestErrorCity(res))
          throw new Error(res);
        }
        dispatch(actionCreatorToggleIsFeatchingCity(false))
        dispatch(actionCreatorSetWetherInCity(res));
        dispatch(actionCreatorQueryInProgress(false))
      })
      .catch((err) => {
        console.log(err);
        dispatch(actionCreatorToggleIsFeatchingCity(false))
        // dispatch(actionCreatorSetReqestErrorCity(err))
        dispatch(actionCreatorQueryInProgress(false))
        if (err == 'TypeError: Failed to fetch') {
          err = `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`;
        }
        return err;
      });
  }
}

const getWetherThunk = () => {
  return (dispatch) => {
    dispatch(actionCreatorToggleIsFeatching(true))
    dispatch(actionCreatorSetReqestError(null))
    getIP()
      .then(res => {
        dispatch(actionCreatorToggleIsFeatching(false))
        if (res.err) {
          throw new Error(res);
        }
        dispatch(actionCreatorSetWether(res));
      })
      .catch((err) => {
        console.log(err);
        dispatch(actionCreatorSetReqestError(err))
        dispatch(actionCreatorToggleIsFeatching(false))
        if (err == 'TypeError: Failed to fetch') {
          err = `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`;
        }
      });
  }
}

const wetherReducerApi = (state = initialState, action) => {
  switch (action.type) {
    case SET_WETHER_INFO:
      return {
        ...state,
        wether: { ...state.wether, data: action.data }
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        wether: { ...state.wether, isFetching: action.isFetching }
      };
    case TOGGLE_IS_FETCHING_CITY:
      return {
        ...state,
        wetherInCity: { ...state.wetherInCity, isFetching: action.isFetching }
      };
    case QUERY_IN_PROGRESS_CITY:
      return {
        ...state,
        wetherInCity: { ...state.wetherInCity, queryInProgress: action.queryInProgress }
      };
    case SET_WETHER_DATA_IN_CITY:
      return {
        ...state,
        wetherInCity: { ...state.wetherInCity, wetherInCity: action.wetherInCity }
      }
    case SET_ERROR:
      return {
        ...state,
        wether: { ...state.wether, err: action.err }
      }
    case SET_ERROR_CITY:
      return {
        ...state,
        wetherInCity: { ...state.wetherInCity, err: action.err }
      }
    default:
      return state;
  }
}

export { wetherReducerApi, getWetherThunk, getWetherCityThunk }