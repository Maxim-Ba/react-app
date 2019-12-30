import React from 'react';
import { ApiItem } from './ApiItem/ApiItem'
class Api extends React.Component {
  render() {
    return (
      <div>
        <ApiItem title={'APIName'} data={'DATA'} />
      </div>)
  }
}

export { Api };