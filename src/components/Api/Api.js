import React from 'react';
import {ApiItem} from './ApiItem/ApiItem'
class Api extends React.Component{
  render(){
    return(
    <div>
      <ApiItem/>
      <ApiItem/>
      <ApiItem/>
      <ApiItem/>
    </div>)
  }
}

export {Api};