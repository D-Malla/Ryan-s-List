const initialState = {
  categories: [],
  listings: [],
  posts: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CATEGORIES':
      return {...state, categories: action.payload}
    case 'LISTINGS':
      return {...state, listings: action.payload}
      case 'POSTS' :
        return  {...state, posts: action.payload}
    default:
      return state
  }
}