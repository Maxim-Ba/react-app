import React from 'react';
import style from './main.module.scss';
import {Api} from '../Api/Api';
import {Contacts} from '../Contacts/Contacts';
import {AboutAuthor} from '../AboutAuthor/AboutAuthor';
import {AboutProject} from '../AboutProject/AboutProject';

class Main extends React.Component {
  componentDidMount(){
    console.log('componrnt did mount')
  }
  render(){
    return (<div className={style.main}>
      <Api/>
      <Contacts />
      <AboutAuthor />
      <AboutProject />
    </div>)
  }
}

export {Main};
