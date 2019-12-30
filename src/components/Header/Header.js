import React from 'react';
import style from './header.module.scss';
import { HeaderItem } from './HeaderItem/HeaderItem';
class Header extends React.Component{
  render(){
    return(
    <header className={style.header}> 
      <HeaderItem title={'Api'} link={'Api'}/>
      <HeaderItem title={'Contacts'} link={'Contacts'}/>
      <HeaderItem title={'About author'} link={'AboutAuthor'}/>
      <HeaderItem title={'About project'} link={'AboutProject'}/>
      <img className={style.header__logo} src=''/>
    </header>)
  }
}

export {Header};