import store from '../store'
import axios from 'axios'

export function mainCategories() {
  axios.get('/api/category').then(resp => {
    store.dispatch({
      type: 'CATEGORIES',
      payload: resp.data.categories
    })
  })
}

export function matchListings(slug) {
  axios.get("/api/listings/" + slug).then(resp => {
    store.dispatch({
      type: "LISTINGS",
      payload: resp.data
    })
  })
}

export function postListings(title) {
  axios.get("/api/listings/" + title).then (resp => {
    store.dispatch ({
      type: "POSTS", 
      payload: resp.data.title
    })
  })
}

