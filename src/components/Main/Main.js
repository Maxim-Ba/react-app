import React from 'react';
import style from './main.module.scss';
import { Api } from '../Api/Api';
import { Contacts } from '../Contacts/Contacts';
import { AboutAuthor } from '../AboutAuthor/AboutAuthor';
import { AboutProject } from '../AboutProject/AboutProject';
import { Route } from 'react-router-dom';
import { ContainerCardDescription } from '../Api/ApiItem/Api1/Cards/Card/CardDescription/ContainerCardDescription';

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style.main}>
        <Route path={'/' || '/Api'} render={() => <Api />} />
        <Route path='/Contacts' render={() => <Contacts />} />
        <Route path='/AboutAuthor' component={AboutAuthor} />
        <Route path='/AboutProject' component={AboutProject} />
        <Route path={`/Card`} component={ContainerCardDescription} />

      </div>
    )
  }
}
export { Main };
