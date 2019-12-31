import React from 'react';
import { Route } from 'react-router-dom';
import { Api1 } from './Api1/Api1';
import { Api2 } from './Api2/Api2';
import { Api3 } from './Api3/Api3';
import { Api4 } from './Api4/Api4';
import { Api5 } from './Api5/Api5';

class ApiItem extends React.Component {
  constructor(props){
    super(props)
    this.data = this.props.data;
    // this.apiArr =[
    //     <Api1 title={this.props.title} data={this.props.data}/>,
    //     <Api2 title={this.props.title} data={this.props.data}/>,
    //     <Api3 title={this.props.title} data={this.props.data}/>,
    //     <Api4 title={this.props.title} data={this.props.data}/>,
    //     <Api5 title={this.props.title} data={this.props.data}/>,
    //   ]; 
// * Встроить остальные API
    this.routeData = this.data.map(item=><Api1 title={item.title} data={item.data}/>)
    this.routeDataArray = this.data.map((item, index)=><Route path={item.link} render={()=>{return(this.routeData[index])}} key={index}/>)

  }
  render() {
    return (
      <div>
        {this.routeDataArray}
      </div>
    )
  }
}
export { ApiItem };