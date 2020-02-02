import React from 'react';
import { getIP } from '../../../../modules/APIs/WetherApi';
import { CityForm } from './CityForm/CityForm';

class Api2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        coord: null,
        weather: null,
        main: null,
        wind: null,
        sys: null
      }
    }
  }

  componentDidMount() {
    getIP().then(data => this.setState({ data }))
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevProps != this.props) && (prevState.data != this.state.data)) {
      return true
    }
    return false
  }
//заполнить поля
  render() {
    return (
      <div>
        <h3>Api по получению погоды в Вашем городе</h3>
        <section>
          <p>Температура: , ощущается как </p>
          <p>Ощущается как </p>
          <p>Осадки: </p>
          <p>Давление: </p>
          <p>Верер: скорость - направление - </p>
          <p>Восход в: </p>
          <p>Закат в: </p>
          <p>Город: </p>
        </section>
        <section>
          <h5>Получить информацию о погоде в другом городе</h5>
          <CityForm />{/*передать фунцию по обработке поля города*/}
          <article >
            <p>Температура: , ощущается как </p>
            <p>Ощущается как </p>
            <p>Осадки: </p>
            <p>Давление: </p>
            <p>Верер: скорость - направление - </p>
            <p>Восход в: </p>
            <p>Закат в: </p>
            <p>Город: </p>
          </article>
        </section>
      </div>)
  }
}

export { Api2 };
