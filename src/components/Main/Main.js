import React from 'react';
import style from './main.module.scss';
import {Api} from '../Api/Api'
class Main extends React.Component {
  componentDidMount(){
    console.log('componrnt did mount')
  }
  render(){
    return (<div className={style.main}>
      <Api/>
    </div>)
  }
}

export {Main};
