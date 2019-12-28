import React from 'react';
import style from './nav.module.scss';
import { NavItem } from './NavItem/NavItem';
class Nav extends React.Component{
  render(){
    return(
    <nav className={style.nav}> 
      <NavItem title={'Link1'}/>
      <NavItem title={'Link2'}/>
      <NavItem title={'Link3'}/>
      <NavItem title={'Link4'}/>
      <NavItem title={'Link5'}/>
    </nav>)
  }
}

export{Nav};