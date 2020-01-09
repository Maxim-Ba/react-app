import React from 'react';
import style from './about-author.module.scss';

class AboutAuthor extends React.Component {
  render() {
    return (
      <section className={style.AboutAuthor}>
        <h3 className={style.AboutAuthor__title}>
          Об Авторе
        </h3>
        <div className={style.AboutAuthor__container}>
          <picture className={style.AboutAuthor__picture}>
            <img className={style.AboutAuthor__img} src='/src/vendor/img/author-photo.jpg'></img>{/*сделать нормальный путь к картинке*/}
          </picture>
          <p className={style.AboutAuthor__description}>
            Меня зовут Балашов Максим. Я являюсь фронтэнд разработчиком. Со школы всегда любил увлекаться техникой, информатикой и точными науками, и
            до сегодняшнего дня развивался как технический специалист в различных областях. Сейчас я работаю над созданием сайтов, веб-приложений используя современые технологии
            веб разработки.
          </p>
        </div>

      </section>
    )
  }
}
export { AboutAuthor };