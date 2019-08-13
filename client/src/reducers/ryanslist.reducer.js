const initialState = {
  categories: [],
  posts: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CATEGORIES':
      return {...state, categories: action.payload}
    case 'GET_POSTS':
      return {...state, posts: action.payload}
    default:
      return state
  }
}