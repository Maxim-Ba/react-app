import {windDirection} from '../modules/APIs/WetherApi';

const getWetherSelector = (state) => {
  if (state.wether.wether.data) {
    return {
      icon: state.wether.wether.data.weather[0].icon,
      rainfall: state.wether.wether.data.weather[0].description,
      rainfallDescription: state.wether.wether.data.weather[0].main,
      temp: state.wether.wether.data.main.temp,
      feels_like: state.wether.wether.data.main.feels_like,
      pressure: Math.ceil(state.wether.wether.data.main.pressure * 0.73579262),
      windSpeed: state.wether.wether.data.wind.speed,
      windDeg: windDirection(state.wether.wether.data.wind.deg),
      sunrise: state.wether.wether.data.sys.sunrise,
      sunset: state.wether.wether.data.sys.sunset,
      location: state.wether.wether.data.name
    }

  }
}

const getWetherInCitySelector = (state) => {
  if (state.wether.wetherInCity.wetherInCity) {
    return {
      icon: state.wether.wetherInCity.wetherInCity.weather[0].icon,
      rainfall: state.wether.wetherInCity.wetherInCity.weather[0].description,
      rainfallDescription: state.wether.wetherInCity.wetherInCity.weather[0].main,
      temp: state.wether.wetherInCity.wetherInCity.main.temp,
      feels_like: state.wether.wetherInCity.wetherInCity.main.feels_like,
      pressure: Math.ceil(state.wether.wetherInCity.wetherInCity.main.pressure * 0.73579262),
      windSpeed: state.wether.wetherInCity.wetherInCity.wind.speed,
      windDeg: windDirection(state.wether.wetherInCity.wetherInCity.wind.deg),
      sunrise: state.wether.wetherInCity.wetherInCity.sys.sunrise,
      sunset: state.wether.wetherInCity.wetherInCity.sys.sunset,
      location: state.wether.wetherInCity.wetherInCity.name
    };
  }
  return null;
}



export { getWetherSelector, getWetherInCitySelector }