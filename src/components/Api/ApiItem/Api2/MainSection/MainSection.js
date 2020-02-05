import React from 'react';

const MainSection = (props) => {
  if (props.temp){
    return (
      <section>
        <p>Температура: {props.temp}°С, ощущается как {props.feels_like}°С</p>
        <p>Осадки: {props.rainfall}  {/*{props.rainfallDescription} {props.icon}*/}</p>
        <p>Давление: {props.pressure}</p>
        <p>Верер: скорость - {props.windSpeed} м/с, направление - {props.windDeg}</p>
        <p>Город: {props.location}</p>
      </section>
    )
  }
  return (
    <section>
      <p>Введите в поле название города, по которому хотите получить информацию о погоде</p>
    </section>
  )
}


export {MainSection};