import React from 'react';
import style from './nav-item.module.scss';
class NavItem extends React.Component{
  render(){

    return(
    <p className={style.navItem}> 
      {this.props.title}
    </p>)
  }
}

export{NavItem};