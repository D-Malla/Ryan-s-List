import React from 'react'
import '../../styles/MainPage.css'

export default props => {
  return (
    <div id='leftAside'>
      <div id='leftAsideHeading'>
        <h1><a href='#'>ryanslist</a></h1>
        <p><a className='highlight' href='#'>create a posting</a></p>
        <p><a href='#'>my account</a></p>
      </div>
      <div id='leftAsideSearchCal'>
        <input type='text' placeholder='search craigslist'></input>
        <p><a href='#'>event calendar</a></p>
        <table className="cal">
          <tbody>
              <tr id="days"> 
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
                <th>S</th>
              </tr>
            <tr>
                    <td className="today">5</td>
                    <td className="today">6</td>
                    <td className="today">7</td>
                    <td className="today "><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-08">8</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-09">9</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-10">10</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-11">11</a></td>
            </tr>
            <tr>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-12">12</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-13">13</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-14">14</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-15">15</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-16">16</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-17">17</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-18">18</a></td>
            </tr>
            <tr>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-19">19</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-20">20</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-21">21</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-22">22</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-23">23</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-24">24</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-25">25</a></td>
            </tr>
            <tr>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-26">26</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-27">27</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-28">28</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-29">29</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-30">30</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-08-31">31</a></td>
                    <td className="today"><a href="//lasvegas.craigslist.org/d/events-classes/search/eee?sale_date=2019-09-01">1</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id='leftAsideLinksOne'>
        <p><a href='#'>help, faq, abuse, legal</a></p>
        <p><a href='#'>avoid scams & fraud</a></p>
        <p><a href='#'>personal safety tips</a></p>
        <p><a href='#'>terms of use new</a></p>
        <p><a href='#'>privacy policy</a></p>
        <p><a href='#'>system status</a></p>
      </div>
      <div id='leftAsideLinksTwo'>
        <p><a href='#'>about craigslist</a></p>
        <p><a href='#'>craigslist is hiring in sf</a></p>
        <p><a href='#'>craigslist open source</a></p>
        <p><a href='#'>craigslist blog</a></p>
        <p><a href='#'>best-of-craigslist</a></p>
        <p><a href='#'>craigslist TV</a></p>
        <p><a href='#'>"craigslist joe"</a></p>
        <p><a href='#'>craig connects</a></p>
      </div>
    </div>
  )
}