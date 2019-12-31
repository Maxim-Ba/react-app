import React from 'react';
import ReactDom from 'react-dom';
import './styles/index.css'
import { Main } from './components/Main/Main'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Nav } from './components/Nav/Nav';
import { BrowserRouter } from 'react-router-dom';
import { state } from './redux/state'

const linksNames = state.api.map((item)=>item.name)
const linksPath = state.api.map((item)=>item.link)
const element =
  <BrowserRouter>
    <div>
      <Header linksNames={linksNames}/>
      <div className={'app'}>
        <Nav linksNames={linksNames} linksPath={linksPath}/>
        <div className={'right'}>
          <Main data={state.api}/>
        </div>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
ReactDom.render(element, document.getElementById('root'))



// /*A004D9ED domin*//*A004D9ED domin*/ 