import { combineReducers, createStore } from 'redux'
import characters from './reducer/characters'

/**
 * Combine all reducers that handle datasets,
 * and associate them with their dataset's keys.
*/
const reducers = combineReducers({
  "characters": characters
})

/** Enable chrome extension to view redux data */
const reduxDevTools = window.devToolsExtension && window.devToolsExtension()

/** Create our store with no default data */
const store = createStore(reducers, {}, reduxDevTools)

export default store