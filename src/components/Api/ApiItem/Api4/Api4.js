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
        <h3>4</h3>
        <div>4</div>
      </div>)
  }
}


export {Api4};