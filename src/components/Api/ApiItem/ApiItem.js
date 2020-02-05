import React from 'react';
import { Route } from 'react-router-dom';
import { Api2 } from './Api2/Api2';
import { Api3 } from './Api3/Api3';
import { Api4 } from './Api4/Api4';
import { Api5 } from './Api5/Api5';
import { ContainerApi1 } from './Api1/ContainerApi1';
import { Api2Container } from './Api2/Api2Container';

class ApiItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Route path={'/Api/Api1'} render={() => <ContainerApi1 />} />
        <Route path={'/Api/Api2'} render={() => <Api2Container />} />
        <Route path={'/Api/Api3'} render={() => <Api3 />} />
        <Route path={'/Api/Api4'} render={() => <Api4 />} />
        <Route path={'/Api/Api5'} render={() => <Api5 />} />
      </div>
    )
  }
}
export { ApiItem };