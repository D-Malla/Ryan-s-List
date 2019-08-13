import React, { useEffect }  from 'react'
import '../../styles/MainPage.css'
import { useSelector } from 'react-redux'
import { getCategories } from '../../actions/ryanslist.actions'
import { Link } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import LeftAside from './LeftAside'
import RightAside from './RightAside'

export default props => {
  const categories = useSelector(appState => appState.categories)
  

  useEffect(() => {
    getCategories()
  }, [])


  return (
    <div id='container'>  
      <div className='middleContainer'>
        <LeftAside />
        <div className='insideMiddleContainer'>
          <Header />
          <div id='mainContent'>
                {categories.map(item => (
                  <div className='catContainer'>
                  <h1><Link to={'/' + item.slug}>{item.name}</Link></h1>
                  {item.subcat.map(cat => (
                    <div id="subcats">
                    <Link to={'/' + cat.slug}><p>{cat.name}</p></Link>
                    </div>
                  ))}
                  </div>
                ))}
          </div>
        </div>
        <RightAside />
      </div>
      <Footer />
    </div>
    
  )
}


