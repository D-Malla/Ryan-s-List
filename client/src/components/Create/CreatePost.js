import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getCategory } from '../../actions/ryanslist.actions'

export default props => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState ('')
  const category = useSelector(appState =>appState.category)

  useEffect(() => {
    getCategory()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    getCategory()
    sendPost(title,content)
  }

  return (
    <div>
      <h1>posting to {category}</h1>
      <form className='postForm' onSubmit={handleSubmit}>
        <label for='title'>Title</label>
        <input type='text' name='title' value={title} onchange={e => setTitle(e.target.value)} />
        <label for='content'>Post Content</label>
        <textarea id='content' name='content' value={content} onChange={e => setContent(e.target.value)}></textarea>
      </form>
    </div>
  )
}