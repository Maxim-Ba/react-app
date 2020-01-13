import React from 'react';
import style from './Preloader.module.scss'

class Preloader extends React.Component {
  constructor(props) {
    super(props)
    this.imgUrl = this.props.urlImage
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.item_1}></div>
        <div className={style.item_2}></div>
        <div className={style.item_3}></div>
        <div className={style.item_4}></div>
        <div className={style.item_5}></div>
      </div>
    )
  }
}

export { Preloader };