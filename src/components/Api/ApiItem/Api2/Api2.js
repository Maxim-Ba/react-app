import React from 'react';

class Api2 extends React.Component{
  constructor(props){
    super(props)
    this.props= props;
  }
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return(
      <div>
        <h3>2</h3>
        <div>2</div>
      </div>)
  }
}

export {Api2};