import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'

import Header from './Header'
import Footer from './Footer'
import LeftAside from './LeftAside'
import RightAside from './RightAside'
import MainContent from './MainContent'

export default props => {
  return (
    <Provider store={store}>
      <div id='container'>  
        <div className='middleContainer'>
          <LeftAside />
          <div className='insideMiddleContainer'>
            <Header />
            <MainContent />
          </div>
          <RightAside />
        </div>
        <Footer />
      </div>
    </Provider>
  )
}