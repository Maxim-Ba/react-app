import React from 'react';
import { CityForm } from './CityForm/CityForm';
import { MainSection } from './MainSection/MainSection';
import style from './Api2.module.scss'
import {Preloader} from './Preloader/Preloader' 

class Api2 extends React.PureComponent {
  constructor(props) {
    super(props)
    this.getWetherThunk = this.props.getWetherThunk.bind(this)
  }

  componentDidMount() {
    this.getWetherThunk()
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevProps !== this.props) || (prevState !==this.state)) {
      return true
    }
    return false
  }
  render() {
    return (
      <div className={style.Api2}>
        <div>
          <h3>Api по получению погоды в Вашем городе</h3>
          {this.props.err ? <p>{this.props.err.err}</p> : null }
          {this.props.isFetchingWether ? <Preloader /> : <MainSection {...this.props.wether}/> }
        </div>
        <div>
          <h3>Получить информацию о погоде в другом городе</h3>
          {this.props.errCity ? <p>{this.props.errCity.err} </p>: null }
          {this.props.isFetchingCity ? <Preloader /> : <MainSection {...this.props.wetherInCity}/> }
          <CityForm getWetherCityThunk={this.props.getWetherCityThunk} {...this.props.queryInProgressCity}/>
        </div>
      </div>)
  }
}

export { Api2 };
