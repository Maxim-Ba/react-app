import React from 'react';
import style from './nav.module.scss';
import { NavItem } from './NavItem/NavItem';
class Nav extends React.Component {
  render() {
    return (
      <nav className={style.nav}>
        <NavItem title={'Api1'} link={'/Api/Api1'}/>
        <NavItem title={'Api2'} link={'/Api/Api2'}/>
        <NavItem title={'Api3'} link={'/Api/Api3'}/>
        <NavItem title={'Api4'} link={'/Api/Api4'}/>
        <NavItem title={'Api5'} link={'/Api/Api5'}/>
      </nav>)
  }
}

export { Nav };