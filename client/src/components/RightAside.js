import React from 'react'
import '../styles/App.css'

export default props => {
  return (
    <div id='rightAside'>
      <div id='rightAsideDropdown'>
      <select name="lang" id="chlang" className="js-only">
        <option value="?lang=da&amp;setlang=1">dansk</option>
        <option value="?lang=de&amp;setlang=1">deutsch</option>
        <option selected="" value="?lang=en&amp;cc=us&amp;setlang=1">english</option>
        <option value="?lang=es&amp;cc=mx&amp;setlang=1">español</option>
        <option value="?lang=fr&amp;setlang=1">français</option>
        <option value="?lang=it&amp;setlang=1">italiano</option>
        <option value="?lang=pt&amp;setlang=1">português</option>
        <option value="?lang=fi&amp;setlang=1">suomi</option>
        <option value="?lang=sv&amp;setlang=1">svenska</option>
        <option value="?lang=vi&amp;setlang=1">tiếng việt</option>
        <option value="?lang=tr&amp;setlang=1">türkçe</option>
        <option value="?lang=ru&amp;setlang=1">русский</option>
        <option value="?lang=zh&amp;setlang=1">中文</option>
        <option value="?lang=ja&amp;setlang=1">日本語</option>
        <option value="?lang=ko&amp;setlang=1">한국말</option>
    </select>
      </div>
      <div id='rightAsideLocations'>
        <ul className="menu collapsible">
          <li className="expand s">
            <h5 className="ban hot active">nearby cl</h5>
            <ul className="acitem">
              <li className="s"><a href="//bakersfield.craigslist.org/">bakersfield</a></li>
              <li className="s"><a href="//elko.craigslist.org/">elko</a></li>
              <li className="s"><a href="//flagstaff.craigslist.org/">flagstaff</a></li>
              <li className="s"><a href="//fresno.craigslist.org/">fresno</a></li>
              <li className="s"><a href="//goldcountry.craigslist.org/">gold country</a></li>
              <li className="s"><a href="//hanford.craigslist.org/">hanford</a></li>
              <li className="s"><a href="//imperial.craigslist.org/">imperial co</a></li>
              <li className="s"><a href="//inlandempire.craigslist.org/">inland empire</a></li>
              <li className="s"><a href="//losangeles.craigslist.org/">los angeles</a></li>
              <li className="s"><a href="//merced.craigslist.org/">merced</a></li>
              <li className="s"><a href="//modesto.craigslist.org/">modesto</a></li>
              <li className="s"><a href="//mohave.craigslist.org/">mohave co</a></li>
              <li className="s"><a href="//orangecounty.craigslist.org/">orange co</a></li>
              <li className="s"><a href="//palmsprings.craigslist.org/">palm springs</a></li>
              <li className="s"><a href="//phoenix.craigslist.org/">phoenix</a></li>
              <li className="s"><a href="//prescott.craigslist.org/">prescott</a></li>
              <li className="s"><a href="//provo.craigslist.org/">provo</a></li>
              <li className="s"><a href="//reno.craigslist.org/">reno</a></li>
              <li className="s"><a href="//saltlakecity.craigslist.org/">salt lake</a></li>
              <li className="s"><a href="//sandiego.craigslist.org/">san diego</a></li>
              <li className="s"><a href="//slo.craigslist.org/">san luis obispo</a></li>
              <li className="s"><a href="//santabarbara.craigslist.org/">santa barbara</a></li>
              <li className="s"><a href="//santamaria.craigslist.org/">santa maria</a></li>
              <li className="s"><a href="//showlow.craigslist.org/">show low</a></li>
              <li className="s"><a href="//stgeorge.craigslist.org/">st george</a></li>
              <li className="s"><a href="//stockton.craigslist.org/">stockton</a></li>
              <li className="s"><a href="//tucson.craigslist.org/">tucson</a></li>
              <li className="s"><a href="//ventura.craigslist.org/">ventura</a></li>
              <li className="s"><a href="//visalia.craigslist.org/">visalia-tulare</a></li>
              <li className="s"><a href="//yuma.craigslist.org/">yuma</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}