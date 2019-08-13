import React from 'react'
import 'normalize.css/normalize.css'
import './../styles/MainPage.css'
import { Provider } from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import MainContent from './Main Page/MainContent'
import ListMain from './posting_list/ListMain'
import PostMain from './post_detail/PostMain'

export default props => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path='/' component={MainContent}/>
          <Route exact path={'/:slug'} component={ListMain}/>
          <Route path='/post' component={PostMain}/>
        </div>
      </Router>
    </Provider>
  )
}