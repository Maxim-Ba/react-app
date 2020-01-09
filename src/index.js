import React from 'react';
import ReactDom from 'react-dom';
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/redux-store'
import { Provider } from 'react-redux';
import { App } from './App';

// let renderEntairTree = () => {
  ReactDom.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>, document.getElementById('root'))
// }

// renderEntairTree()
// store.subscribe(() => {
//   renderEntairTree();
// });

