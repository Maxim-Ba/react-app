import axios from "axios";

const getInformationApi = (query) => {
  const HOURS_IN_DAY = 24;
  const MINUTES_IN_HOUR = 60;
  const SECONDS_IN_MINUTE = 60;
  const MILISECONDS_IN_SECOND = 1000;
  const DAYS_IN_WEEK = 24;
  const _apiKey = '13f71805e5ce4249978a94ba058cd269';
  const _dataFrom = new Date();
  const _dataTo = new Date(_dataFrom.valueOf() - ((HOURS_IN_DAY * SECONDS_IN_MINUTE * MINUTES_IN_HOUR * MILISECONDS_IN_SECOND) * DAYS_IN_WEEK));
  const _language = 'ru';
  const _pageSize = '100';
  const _queryString = 'https://newsapi.org/v2/everything?';
  const _queryStringOptions = '&apiKey=' + _apiKey +
    '&from=' + _dataFrom.toISOString() +
    '&to=' + _dataTo.toISOString() +
    '&language=' + _language +
    '&pageSize=' + _pageSize;
  return axios.get(_queryString + 'q=' + query + _queryStringOptions)

}

export { getInformationApi }