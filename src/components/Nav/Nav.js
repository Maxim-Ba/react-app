import React from 'react';
import style from './nav.module.scss';
import { NavItem } from './NavItem/NavItem';
class Nav extends React.Component {
  constructor(props){
    super(props)
    this.navItems = this.props.linksNames.map((item, index)=>{
      return(
      <NavItem title={item} link={this.props.linksPath[index]}
      key={index}/>)
    })
  }
  render() {
    return (
      <nav className={style.nav}>
        {this.navItems}
      </nav>)
  }
}

export { Nav };