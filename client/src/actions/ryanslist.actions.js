import store from '../store'
import axios from 'axios'

export function getCategories() {
  axios.get('/api/categories').then(resp => {
    store.dispatch({
      type: 'CATEGORIES',
      payload: resp.data.categories
    })
  })
}

export function getPosts(slug) {
  axios.get("/api/posts/" + slug).then(resp => {
    store.dispatch({
      type: "GET_POSTS",
      payload: resp.data
    })
  })
}


