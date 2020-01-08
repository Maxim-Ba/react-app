class NewsApi {
  constructor() {
    const HOURS_IN_DAY = 24;
    const MINUTES_IN_HOUR = 60;
    const SECONDS_IN_MINUTE = 60;
    const MILISECONDS_IN_SECOND = 1000;
    const DAYS_IN_WEEK = 24;
    this._apiKey = '13f71805e5ce4249978a94ba058cd269';
    this._dataFrom = new Date();
    this._dataTo = new Date(this._dataFrom.valueOf() - ((HOURS_IN_DAY * SECONDS_IN_MINUTE * MINUTES_IN_HOUR * MILISECONDS_IN_SECOND) * DAYS_IN_WEEK));
    this._language = 'ru';
    this._pageSize = '100';
    this._queryString = 'https://newsapi.org/v2/everything?';
    this._queryStringOptions = '&apiKey=' + this._apiKey +
      '&from=' + this._dataFrom.toISOString() +
      '&to=' + this._dataTo.toISOString() +
      '&language=' + this._language +
      '&pageSize=' + this._pageSize;
    this.getArticlesInformation = this._getArticlesInformation.bind(this);
  };
  _getArticlesInformation(input) {
    return fetch(this._queryString + 'q=' + input + this._queryStringOptions, {
      method: 'GET'
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз (Ошибка ${res.status})`);
      })
      .then(res => {
        return res.articles;
      })
  };
};

export { NewsApi };