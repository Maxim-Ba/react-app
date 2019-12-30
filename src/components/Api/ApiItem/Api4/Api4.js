import React from 'react';

class Api4 extends React.Component{
  constructor(props){
    super(props)
    this.props = props;
  }
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return(
      <div>
        <h3>{this.props.title}</h3>
        <div>{this.props.data}</div>
      </div>)
  }
}


export {Api4};