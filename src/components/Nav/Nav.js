import React from 'react';
import style from './nav.module.scss';
import { NavItem } from './NavItem/NavItem';
class Nav extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <nav className={style.nav}>
        <NavItem title={'News Api'} link={'/Api/Api1'}/>
        <NavItem title={'Wether Api'} link={'/Api/Api2'}/>
        <NavItem title={'Api'} link={'/Api/Api3'}/>
        <NavItem title={'Api'} link={'/Api/Api4'}/>
        <NavItem title={'Api'} link={'/Api/Api5'}/>
      </nav>)
  }
}

export { Nav };