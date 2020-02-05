import axios from "axios";

const API_KEY = '75d41685f855660efd1968585eb5cf52';

const getWetherData = (city) => {
  const queryString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  return axios.get(queryString)
    .then(({ data }) => { return data })
    .catch( (error) => {
      if (error.response) {
        console.log(error.response.statusText);
        console.log(error.response.status);
        console.log(error.response.headers);
        return ({err:error.response.statusText, status:error.response.status})
      }
    })
}

const getIP = () => {
  const BaseURL = 'https://freegeoip.app/json/'
  return axios.get(BaseURL)
    .then(({ data }) => {
      return getWetherData(data.city)
    })

}
const windDirection = (value) => {
  if ((1 <= value) && (value <= 89)) {
    return "СВ";
  }
  if (value == 90) {
    return "В";
  }
  if ((91 <= value) && (value <= 179)) {
    return "ЮВ";
  }
  if (value == 180) {
    return "Ю";
  }
  if ((181 <= value) && (value <= 269)) {
    return "ЮЗ";
  }
  if (value == 270) {
    return "З";
  }
  if ((271 <= value) && (value <= 359)) {
    return "СЗ";
  }
  if (value == 360) {
    return "С";
  }
  return 'nooooooooo';

}
export { getIP, getWetherData, windDirection }