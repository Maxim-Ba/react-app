import React from 'react';
import style from './footer.module.scss';
import { FooterSection } from './FooterSection/FooterSection';
class Footer extends React.Component{
  render(){
    return(
    <footer className={style.footer}> 
      <FooterSection title={'contacts'}/>
      <FooterSection title={'About author'}/>
      <FooterSection title={'About project'}/>
    </footer>)
  }
}

export {Footer};