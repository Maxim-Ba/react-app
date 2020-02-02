import axios from "axios";

const API_KEY = '75d41685f855660efd1968585eb5cf52';

const getWetherData = (city)=>{
  const queryString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  return axios.get(queryString)
    .then(({data})=>data)
    .catch(err=> console.log(err))

}

const getIP = () => {
  const BaseURL = 'https://freegeoip.app/json/'
  return axios.get(BaseURL)
    .then(({data}) => getWetherData(data.city))
    .catch(err=> console.log(err))

}

export { getIP }