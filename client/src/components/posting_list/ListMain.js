import React, { useEffect } from 'react'
import store from '../../store'
import { Provider } from 'react-redux'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getPosts } from '../../actions/ryanslist.actions'
import '../../styles/ListMain.css'
import moment from 'moment'

import ListHeader from './ListHeader'
import ListFooter from './ListFooter'

export default props => {
  const posts = useSelector(appState => appState.posts)

  useEffect(() => {
    getPosts( props.match.params.slug)
  }, [props.match.params.slug])

  const slug = props.match.params.slug

  return (
    <Provider store={store}>
      <div id='listContainer'>
        <ListHeader />
        <div id='listContent'>
        <aside>
          <h3><a href='#'>{slug}</a></h3>
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
              <div id='postingContainer'>    
              <div id='selectionButtons'>
                <button type='button'></button>
                <p>prev</p>
                <button type='button'></button>
                <p>next</p>
                <button type='button'></button>
              </div>       
                {posts.map(post => (
                  <div id='postList'>
                    <p id='star'>★</p>
                    <p id='postDate'>{moment(post.time_created).format('MMM DD')}</p>
                    <Link to={'/post/' + post.id}>{post.title}</Link>
                    <p>({post.location})</p>
                  </div>
                ))}
              </div>
            </div>
            <ListFooter />
          </div>
        </div>
      </div>
    </Provider>
  )
}