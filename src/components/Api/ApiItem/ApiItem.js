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
    console.log(this.props)
    this.routeData = [
      {path:'/Api/Api1', component: <Api1 title={this.props.title} data={this.props.data}/>},
      {path:'/Api/Api2', component: <Api2 title={this.props.title} data={this.props.data}/>},
      {path:'/Api/Api3', component: <Api3 title={this.props.title} data={this.props.data}/>},
      {path:'/Api/Api4', component: <Api4 title={this.props.title} data={this.props.data}/>},
      {path:'/Api/Api5', component: <Api5 title={this.props.title} data={this.props.data}/>},
    ];
    this.routeDataArray = this.routeData.map((item, index)=> <Route path={item.path} render={()=>(item.component)} title={this.props.title} data={this.props.data} key={index}/>)

  }
  render() {
    return (
      <div>
        {this.routeDataArray}
      </div>
    )
  }
}
// дописать остальные апи сюда и разобраться как другие пропсы передавать title & data
export { ApiItem };