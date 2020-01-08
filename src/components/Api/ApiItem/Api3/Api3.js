import React from 'react';

class Api3 extends React.Component{
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
        <h3>3</h3>
        <div>3</div>
      </div>)
  }
}


export {Api3};