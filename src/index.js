import React from 'react';
import ReactDom from 'react-dom';
import './styles/index.css'
import { Main } from './components/Main/Main'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Nav } from './components/Nav/Nav';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/redux-store'
import { ButtonUp } from './components/Buttons/ButtonUp/ButtonUp';



let renderEntairTree = (state) =>{
  
  ReactDom.render(
    <BrowserRouter>
    <div>
      <Header />
      <div className={'app'}>
        <Nav />
        <div className={'right'}>
          <Main data={state.api} dispatch={store.dispatch.bind(store)}/>
        </div>
      </div>
      <Footer />
    </div>
    <ButtonUp />
  </BrowserRouter>, document.getElementById('root'))
}

renderEntairTree(store.getState())
store.subscribe(() => {
  let state = store.getState();
  return renderEntairTree(state);
});

