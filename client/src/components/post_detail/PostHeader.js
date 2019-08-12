import React from 'react'
import { BrowserRouter as Route, Router, Link } from 'react-router-dom'
import '../../styles/PostMain.css'

export default props => {
  return (
    <header id='postHead'>
      <div id='leftHeadDiv'>
        <Link to='/' ><h3 className="headerLogo" name="logoLink" href="/">RL</h3></Link>
        <ul className="navList ">
          <li className="dropdown area">
            <select id="areaAbb" className="js-only">
              <option value="lasvegas">las vegas</option>
              <option value="bakersfield">bakersfield</option>
              <option value="flagstaff">flagstaff</option>
              <option value="imperial">imperial co</option>
              <option value="inlandempire">inland empire</option>
              <option value="losangeles">los angeles</option>
              <option value="mohave">mohave co</option>
              <option value="orangecounty">orange co</option>
              <option value="palmsprings">palm springs</option>
              <option value="prescott">prescott</option>
              <option value="stgeorge">st george</option>
              <option value="visalia">visalia-tulare</option>
            </select>
          </li>
          <span className="dropdownArrow">&gt;</span>
          <li className="dropdown section">
            <select id="catAbb">
              <option value="ccc" selected="">community</option>
              <option value="eee">events</option>
              <option value="sss">for sale</option>
              <option value="ggg">gigs</option>
              <option value="hhh">housing</option>
              <option value="jjj">jobs</option>
              <option value="rrr">resumes</option>
              <option value="bbb">services</option>
            </select>
          </li>
          <span className="dropdownArrow">&gt;</span>
          <li className="dropdown category">
            <select id="subcatAbb" className="js-only">
              <option value="ccc">all</option>
              <option value="act" selected>activity partners</option>
              <option value="ats">artists</option>
              <option value="kid">childcare</option>
              <option value="com">general</option>
              <option value="grp">groups</option>
              <option value="vnn">local news and views</option>
              <option value="laf">lost &amp; found</option>
              <option value="mis">missed connections</option>
              <option value="muc">musicians</option>
              <option value="pet">pets</option>
              <option value="pol">politics</option>
              <option value="rnr">rants &amp; raves</option>
              <option value="rid">rideshare</option>
              <option value="vol">volunteers</option>
            </select>
          </li>
        </ul>
      </div>
      <div id='rightHeadDiv'>
        <p id='post'>post</p>
        <p id='account'>account</p>
      </div>
    </header>
  )
}