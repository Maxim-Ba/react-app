import React from 'react';
import style from './NewsApi.module.scss'
import { ContainerCards } from './Cards/ContainerCards';
import * as axios from 'axios';


class Api1 extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.onFindNews = this.onFindNews.bind(this)
    this.onHandleChange = this.onHandleChange.bind(this)
    this.inputOfNews = React.createRef()
    this.getInformation=this.getInformation.bind(this)
  }
  getInformation() {
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
    axios.get(_queryString + 'q=' + this.inputOfNews.current.value + _queryStringOptions)
      .then(res => {
        const DATA = res.data.articles
        return this.props.findNews(DATA);
      })
      .catch((err) => {
        console.log(err);
        if (err == 'TypeError: Failed to fetch') {
          err = `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`;
        }
      });

  }
  onSubmitForm(event) {
    event.preventDefault();
  }
  onFindNews() {
    return this.props.findNews(this.inputOfNews.current.value);
  }
  onHandleChange(event) {
    return this.props.handleChange(event);
  }
  render() {
    return (
      <section className={style.ApiNews}>
        <h3 className={style.ApiNews__title}>Newsapi.org</h3>
        <p className={style.ApiNews__description}>
          Это Api по поиску новостей.
          Введите в поле строку по которой будет производиться поист по новостям.
          Количесво новостей имеет ограничение в 100 штук.
        </p>
        <main className={style.ApiNews__main}>
          <form className={style.ApiNews__form} onSubmit={this.onSubmitForm}>
            <div className={style.ApiNews__inputContainer}>
              <input className={style.ApiNews__input} ref={this.inputOfNews} type='text' placeholder='Введите название новости' onChange={this.onHandleChange} />
              <button className={style.ApiNews__button} onClick={this.getInformation}>Искать</button>
            </div>
          </form>
        </main>
        <ContainerCards />
      </section>)
  }
}

export { Api1 };