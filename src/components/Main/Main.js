import React from 'react';
import style from './main.module.scss';
import { Api } from '../Api/Api';
import { Contacts } from '../Contacts/Contacts';
import { AboutAuthor } from '../AboutAuthor/AboutAuthor';
import { AboutProject } from '../AboutProject/AboutProject';
import { Route } from 'react-router-dom';

class Main extends React.Component {
  componentDidMount() {
    console.log('componrnt did mount')
  }
  render() {
    return (
      <div className={style.main}>
        <Route path={'/'||'/Api'} component={Api} />
        <Route path='/Contacts' component={Contacts} />
        <Route path='/AboutAuthor' component={AboutAuthor} />
        <Route path='/AboutProject' component={AboutProject} />
      </div>
    )
  }
}
export { Main };
