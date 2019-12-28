import React from 'react';
import style from './header.module.scss';
import { HeaderItem } from './HeaderItem/HeaderItem';
class Header extends React.Component{
  render(){
    return(
    <header className={style.header}> 
      <HeaderItem title={'Api'}/>
      <HeaderItem title={'Contacts'}/>
      <HeaderItem title={'About author'}/>
      <HeaderItem title={'About project'}/>
      <img className={style.header__logo} src=''/>
    </header>)
  }
}

export {Header};