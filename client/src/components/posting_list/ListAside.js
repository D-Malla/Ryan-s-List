import React, {useEffect} from 'react'
import { matchListings } from '../../actions/ryanslist.actions'
import '../../styles/ListMain.css'

export default props => {
 

  return (
    <aside>
      <h3></h3>
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
  )
}