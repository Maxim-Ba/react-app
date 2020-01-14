import React from 'react';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { ButtonUp } from './components/Buttons/ButtonUp/ButtonUp';
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
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
        <ButtonUp />
      </div>
    )
  }
}

export {App};