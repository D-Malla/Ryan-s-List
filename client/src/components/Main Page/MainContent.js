import React, { useEffect }  from 'react'
import '../../styles/MainPage.css'
import { useSelector } from 'react-redux'
import { mainCategories } from '../../actions/ryanslist.actions'
import { Link } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import LeftAside from './LeftAside'
import RightAside from './RightAside'

export default props => {
  const categories = useSelector(appState => appState.categories)
  

  useEffect(() => {
    mainCategories()
    console.log(categories)
  }, [])


  return (
    <div id='container'>  
      <div className='middleContainer'>
        <LeftAside />
        <div className='insideMiddleContainer'>
          <Header />
          <div id='mainContent'>
            <div className='mainRow'>
                {categories.map(item => (
                  <div>
                  <h1>{item.name}</h1>
                  {item.subcat.map(cat => (
                    <Link to={'/listmain/' + cat.slug}><p>{cat.name}</p></Link>
                  ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <RightAside />
      </div>
      <Footer />
    </div>
    
  )
}


