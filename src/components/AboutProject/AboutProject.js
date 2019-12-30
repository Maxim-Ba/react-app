import React from 'react';
import style from './about-project.module.scss';

class AboutProject extends React.Component {
  render() {
    return (
      <section className={style.AboutProject}>
        <h3 className={style.AboutProject__title}>
          О проекте
        </h3>
        <p className={style.AboutProject__description}>
          Данный проект демонстрация использования технологий React, Redux, SASS и Bootstrap.
        </p>
        <div className={style.AboutProject__container}>

        </div>
      </section>
    )
  }
}
export { AboutProject };