import React from 'react';

class Api5 extends React.Component {
  constructor(props) {
    super(props)
    this.props = props;
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <h3>5</h3>
        <div>5</div>
      </div>)
  }
}

export { Api5 };