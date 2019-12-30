import React from 'react';

class ApiItem extends React.Component{
  render(){
    return(
      <div>
        <h3>{this.props.title}</h3>
        <div>{this.props.data}</div>
      </div>)
  }
}

export {ApiItem};