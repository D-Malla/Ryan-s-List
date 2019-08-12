import React from 'react'

import PostHeader from './PostHeader'
import PostFooter from './PostFooter'

export default props => {
  return (
    <div>
      <PostHeader />
      <div>
        <div id='selectionButtons'>
          <button type='button'></button>
          <p>prev</p>
          <button type='button'></button>
          <p>next</p>
          <button type='button'></button>
        </div>
          <div id='postInfo'>
            <div>
              <button>reply</button>
              <input type ='checkbox'/> <p>prohibited<sup>[?]</sup></p>
              <p>Posted</p>
            </div>
            <div>
              <p><a href='#'>print</a></p>
            </div>
        </div>
        <div>
          <div id='innerMainDiv'>
            <h3>Title</h3>
            <p>lorem</p>
            <ul>
              <li>do NOT contact me with unsolicited services or offers</li>
            </ul>
          </div>
          <div>
            <img src='../../assets/map.png'></img>
            <p><a href='#'>(google map)</a></p>
          </div>
        </div>
        <div id='postDetails'>
          <p>post id:</p>
          <p>posted:</p>
          <button type='button'>email to friend</button>
          <p><a>best of<sup>[?]</sup></a></p>
        </div>
      </div>
      <PostFooter />
    </div>
  )
}