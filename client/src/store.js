import { createStore } from 'redux'

import ryansList from './reducers/ryanslist.reducer'

const store = createStore(ryansList)

export default store