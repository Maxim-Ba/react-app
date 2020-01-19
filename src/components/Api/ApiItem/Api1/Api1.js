import React from 'react';
import style from './NewsApi.module.scss'
import { ContainerCards } from './Cards/ContainerCards';
import { getInformationApi } from '../../../../modules/APIs/NewsApi';


class Api1 extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.onHandleChange = this.onHandleChange.bind(this)
    this.inputOfNews = React.createRef()
    this.getInformation=this.getInformation.bind(this)
    
  }
  //пренести запрос в контейнерный компонент
  getInformation() {
    this.props.getNewsThunk(this.inputOfNews.current.value)
    // this.props.toggleIsFetching(true)
    // this.props.actionCreatorQueryInProgress(true)
    // getInformationApi()
    //   .then(res => {
    //     const DATA = res.data.articles
    //     this.props.toggleIsFetching(false)
    //     this.props.actionCreatorQueryInProgress(false)
    //     return this.props.findNews(DATA);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.props.toggleIsFetching(false)
    //     this.props.actionCreatorQueryInProgress(false)
    //     if (err == 'TypeError: Failed to fetch') {
    //       err = `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.`;
    //     }
    //   });
  }
  onSubmitForm(event) {
    event.preventDefault();
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
          Введите в поле строку по которой будет производиться поиск по новостям.
          Количесво новостей имеет ограничение в 100 штук.
        </p>
        <main className={style.ApiNews__main}>
          <form className={style.ApiNews__form} onSubmit={this.onSubmitForm}>
            <div className={style.ApiNews__inputContainer}>
              <input className={style.ApiNews__input} ref={this.inputOfNews} type='text' placeholder='Введите название новости' onChange={this.onHandleChange} />
              <button disabled={this.props.queryInProgress} className={style.ApiNews__button} onClick={this.getInformation}>Искать</button>
            </div>
          </form>
        </main>
        <ContainerCards />
      </section>)
  }
}

export { Api1 };