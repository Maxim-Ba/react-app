import React from 'react';
import ReactDom from 'react-dom';
import './styles/index.css'
import { Main } from './components/Main/Main'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Nav } from './components/Nav/Nav';
const element =
  <div>
    <Header />
    <div className={'app'}>
      <Nav />
      <div className={'right'}>
        <Main />
      </div>
    </div>
    <Footer />
  </div>
ReactDom.render(element, document.getElementById('root'))



// /*A004D9ED domin*//*A004D9ED domin*/ 