import React from 'react';
import style from './footer__section.module.scss';
class FooterSection extends React.Component{
  render(){
    return(
    <div className={style.footer__section}> 
      {this.props.title}
    </div>)
  }
}

export {FooterSection};