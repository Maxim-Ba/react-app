import React from 'react';
import style from './buttonUp.module.scss';

class ButtonUp extends React.Component {
  constructor(props) {
    super(props)
    this.onTopOfPage = this.onTopOfPage.bind(this);
  }
  makeVisible() {
    // сделать чтобы кнопка показывалась только внизу страницы
  }
  onTopOfPage() {
    window.scrollTo(0, 0);

  }
  render() {
    return (
      <button className={style.buttonUp} onClick={this.onTopOfPage}>
        <div className={style.buttonUp__tiangle}></div>
      </button>
    )
  }
}

export { ButtonUp }