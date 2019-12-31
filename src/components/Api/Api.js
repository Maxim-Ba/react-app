import React from 'react';
import { ApiItem } from './ApiItem/ApiItem'
class Api extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props.props)
  }
  render() {
    return (
      <div>
        <ApiItem  data={this.props.props} />
      </div>)
  }
}

export { Api };