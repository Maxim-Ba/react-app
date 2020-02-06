import React from 'react';
import style from './Cards.module.scss'
import { PresentationCardsComponent } from './PresentationCardsComponent';
import { Preloader } from './Preloader/Preloader';

class Cards extends React.Component {
  constructor(props) {
    super(props)
    this.pagination = this.pagination.bind(this)
    this.nameOfClass = this.nameOfClass.bind(this)
    this.onCurrentPageChange = this.onCurrentPageChange.bind(this)
    this.showCurrentArticles = this.showCurrentArticles.bind(this)
    
  }
  onCurrentPageChange(page) {
    return this.props.setCurrentPage(page)
  }
  nameOfClass(page) {
    return ((
      this.props.currentPage === page && style.Cards__selectedPage) || style.Cards__unselectedPage)
  }
  showCurrentArticles() {
    const currentArticles = this.props.currentPage * this.props.pageSize
    const arr = [];
    for (let index = currentArticles - this.props.pageSize; index < currentArticles; index++) {
      arr.push(this.props.news[index])
    }
    const newArr = arr.filter((i) => { return i !== undefined })
    return newArr
  }
  pagination() {
    const articlesCount = Math.ceil(this.props.totalArticlesCount / this.props.pageSize)
    const pages = []
    for (let index = 1; index <= articlesCount; index++) {
      pages.push(index)
    }
    return (
      <div className={style.Cards__wrapper}>
        {pages.map((page, key) => {
          return <p className={this.nameOfClass(page)} key={key}
            onClick={() => { this.onCurrentPageChange(page) }}>
            {page}
          </p>
        })}
      </div>
    )
  }

  render() {
    if (this.props.news[0] === 'DATA') {
      return<>{this.props.isFetching ? <Preloader/> : null} <PresentationCardsComponent firstLoad={true} /> </>
    }
    const dataArticlesForRender = this.showCurrentArticles(this.props.news);
    return<>{this.props.isFetching ? <Preloader/> : null} <PresentationCardsComponent pagination={this.pagination} dataArticlesForRender={dataArticlesForRender} sendDataOfCurrentCard={this.props.sendDataOfCurrentCard}/></>
  }
  
}
export { Cards };