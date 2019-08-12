import React, { useEffect } from 'react'
import store from '../../store'
import { Provider } from 'react-redux'
import { useSelector } from 'react-redux'
import { matchListings } from '../../actions/ryanslist.actions'
import '../../styles/ListMain.css'

import ListHeader from './ListHeader'
import ListAside from './ListAside'
import ListFooter from './ListFooter'

export default props => {
  const listName = (appState => appState.listName)

  useEffect(() => {
    matchListings()
  }, [])

  const slug = props.match.params.slug

  return (
    <Provider store={store}>
      <div>
        <ListHeader />
        <div id='listContent'>
        <aside>
          <h3>{slug}</h3>
          <div>
            <ul>
              <li><input type='checkbox' /> search titles only</li>
              <li><input type='checkbox' /> has image</li>
              <li><input type='checkbox' /> posted today</li>
              <li><input type='checkbox' /> bundle duplplicates</li>
              <li><input type='checkbox' /> include nearby areas</li>
            </ul>
          </div>
          <div id='listAsideMiles'>
            <input className='miles' type='text' placeholder='miles'/>
            <input className='zip' type='text' placeholder='from zip'/>
            <button type='button'></button>
          </div>
          <div id='listSearchButtons'>
            <button  className='reset' type='reset'>reset</button>
            <button className='update' type='button'>update search</button>
          </div>
        </aside>
          <div id='innerListContent'>
            <div id='listMainBody'>
            <div>
              <div id='listSearchDiv'>
                <input type='text' placeholder='search activity'/>
                <button type='button'></button>
                <p>save search</p>
              </div>
            </div>
            </div>
            <ListFooter />
          </div>
        </div>
      </div>
    </Provider>
  )
}