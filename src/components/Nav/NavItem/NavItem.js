import React from 'react';
import style from './nav-item.module.scss';
import { NavLink } from 'react-router-dom';
class NavItem extends React.Component{
  render(){

    return(
    <NavLink className={style.navItem} to={this.props.link}> 
      {this.props.title}
    </NavLink>)
  }
}

export{NavItem};