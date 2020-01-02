import React from 'react';
import style from './header-item.module.scss';
import { NavLink } from 'react-router-dom';
class HeaderItem extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <p >
        <NavLink className={style.header__item} activeClassName={style.header__item_active} to={`/${this.props.link}`}>
          {this.props.title}
        </NavLink>
      </p>)
  }
}

export { HeaderItem };