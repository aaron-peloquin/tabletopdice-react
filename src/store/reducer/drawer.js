/**
 * Reducer for the redux key of "drawer".
 * 
 * A boolean value for the drawer's open state
 * @param {bool} (drawer) true if open, false if closed
 */

const defaultState = false

/**
 * Update the drawer state
 * @param {obj} state the array of character objects
 * @param {str} type a String to identify how we want to update the state
 * @returns {obj} The new state of drawer
 */
const charactersReducer = (state=defaultState, { type }) => {
  switch (type) {
    default:
      /** Do nothing */
      break
    case "OpenDrawer":
      state = true
    break
    case "CloseDrawer":
      state = false
    break
  }

  return state  
}

export default charactersReducer