import React from 'react';
import style from './nav.module.scss';
import { NavItem } from './NavItem/NavItem';
class Nav extends React.Component {
  constructor(props){
    super(props)
    // this.navItems = this.props.linksNames.map((item, index)=>{
    //   return(
    //   <NavItem title={item} link={this.props.linksPath[index]}
    //   key={index}/>)
    // })
  }
  render() {
    return (
      <nav className={style.nav}>
        <NavItem title={'News Api'} link={'/Api/Api1'}/>
        <NavItem title={'Api'} link={'/Api/Api2'}/>
        <NavItem title={'Api'} link={'/Api/Api3'}/>
        <NavItem title={'Api'} link={'/Api/Api4'}/>
        <NavItem title={'Api'} link={'/Api/Api5'}/>
      </nav>)
  }
}

export { Nav };