import React from 'react';
import ReactDom from 'react-dom';
import './styles/index.css'
import { Main } from './components/Main/Main'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Nav } from './components/Nav/Nav';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/state'
import { ButtonUp } from './components/Buttons/ButtonUp/ButtonUp';



let renderEntairTree = (store) =>{
  const linksNames = store.getState().api.map((item) => item.name)
  const linksPath = store.getState().api.map((item) => item.link)
  ReactDom.render(
    <BrowserRouter>
    <div>
      <Header linksNames={linksNames} />
      <div className={'app'}>
        <Nav linksNames={linksNames} linksPath={linksPath} />
        <div className={'right'}>
          <Main data={store.getState().api} dispatch={store.dispatch.bind(store)}/>
        </div>
      </div>
      <Footer />
    </div>
    <ButtonUp dispatch={store.dispatch.bind(store)} />
  </BrowserRouter>, document.getElementById('root'))
}

renderEntairTree(store)
store.subscribe(renderEntairTree)
// /*A004D9ED domin*//*A004D9ED domin*/ 