import React from 'react'
import Map from '../../assets/map.png'
import moment from 'moment'

import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

export default props => {
  return (
    <div>
      <PostHeader />
      <div id='postContainer'>
        <div id='upperPostDiv'>
            <div id='postInfo'>
              <button id='purpButton'>reply</button>
              <input type ='checkbox'/> <p>prohibited<sup>[?]</sup></p>
              <p>Posted {}</p>
            </div>
            <div>
              <p><a href='#'>print</a></p>
            </div>
          </div>
          <div>
            <div id='innerMainDiv'>
              <div id='contentDiv'>
                <h3>Title</h3>
                <p>lorem</p>
                <ul>
                  <li>do NOT contact me with unsolicited services or offers</li>
                </ul>
              </div>
              <div id='imgDiv'>
                <img src={Map} alt='map'></img>
                <p><a href='#'>(google map)</a></p>
              </div>
            </div>
            <div id='postDetails'>
              <p>post id:</p>
              <p>posted:</p>
              <button type='button'>email to friend</button>
              <p><a><span>♥</span>best of<sup>[?]</sup></a></p>
            </div>
          </div>
      </div>
      <PostFooter />
    </div>
  )
}