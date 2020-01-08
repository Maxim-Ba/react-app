import React from 'react';
import { actionCreatorInputForm, actionCreatorFindNews } from '../../../../redux/newsApiReducer';
import { Api1 } from './Api1';

class ContainerApi1 extends React.Component {
  constructor(props) {
    super(props)
    this.findNews = this.findNews.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.inputOfNews = React.createRef()
    console.log(this.props)
  }
  findNews(string){
    return this.props.dispatch(actionCreatorFindNews(string));
  }
  handleChange(event){
    return this.props.dispatch(actionCreatorInputForm(event));
  }
  render() {
    return (
      <Api1 dataCards={this.props.data} handleChange={this.handleChange} findNews={this.findNews}/>
      )
  }
}

export { ContainerApi1 };