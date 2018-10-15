import { combineReducers, createStore } from 'redux'
import characters from './reducer/characters'
import drawer from './reducer/drawer'

/**
 * Combine all reducers that handle datasets,
 * and associate them with their dataset's keys.
*/
const reducers = combineReducers({
  "characters": characters,
  "drawer": drawer,
})

let store

if(typeof window != 'undefined') {
  /** We are in a browser render, enable chrome extension to view redux data */
  const reduxDevTools = window.devToolsExtension && window.devToolsExtension()
  store = createStore(reducers, {}, reduxDevTools)
}
else {
  store = createStore(reducers)
}

export default store