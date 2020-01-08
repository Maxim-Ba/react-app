import React from 'react';
import { Route } from 'react-router-dom';
import { Api2 } from './Api2/Api2';
import { Api3 } from './Api3/Api3';
import { Api4 } from './Api4/Api4';
import { Api5 } from './Api5/Api5';
import { ContainerApi1 } from './Api1/ContainerApi1';

class ApiItem extends React.Component {
  constructor(props) {
    super(props)
    this.data = this.props.data;
    this.dispatch = this.props.dispatch;
    // this.apiArr =[
    //     <Api1 title={this.props.title} data={this.props.data} key={1} dispatch={this.dispatch}/>,
    //     <Api2 title={this.props.title} data={this.props.data} key={2} dispatch={this.dispatch}/>,
    //     <Api3 title={this.props.title} data={this.props.data} key={3} dispatch={this.dispatch}/>,
    //     <Api4 title={this.props.title} data={this.props.data} key={4} dispatch={this.dispatch}/>,
    //     <Api5 title={this.props.title} data={this.props.data} key={5} dispatch={this.dispatch}/>,
    //   ];
    // * Встроить остальные API
    // this.routeData = this.data.map(item=><Api1 title={item.title} data={item.data} dispatch={this.dispatch}/>)
    // this.routeDataArray = this.data.map((item, index)=><Route path={item.link} render={()=>{return(this.routeData[index])}} key={index}/>)
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <Route path={this.data.link} render={() => <ContainerApi1 title={this.data.title} data={this.data} dispatch={this.dispatch} />} />
        <Route path={'/Api/Api2'} render={() => <Api2 />} />
        <Route path={'/Api/Api3'} render={() => <Api3 />} />
        <Route path={'/Api/Api4'} render={() => <Api4 />} />
        <Route path={'/Api/Api5'} render={() => <Api5 />} />
      </div>
    )
  }
}
export { ApiItem };