import React from 'react';
import style from './header-item.module.scss';
class HeaderItem extends React.Component{
  render(){
    return(
      <p className={style.headerItem}> 
        {this.props.title}
      </p>)
  }
}

export{HeaderItem};