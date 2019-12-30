import React from 'react';

class Api1 extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    return(
      <div>
        {/* <h3>{this.props.title}</h3>
        <div>{this.props.data}</div> */}
        <p>123</p>
      </div>)
  }
}

export {Api1};