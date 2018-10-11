import load from './../dispatch/localStorageLoad'
import save from './../dispatch/localStorageSave'
/**
 * Reducer for the redux key of "characters".
 * Will automatically save to localStorage on every update
 * 
 * An array of objects.
 *  Each object has 2 keys "name" and "sets"
 *    @param {str} name the display name for this character
 *    @param {arr} sets an array of objects containing roll sets for this character
 *      @param {str} label a required label for this set
 *      @param {str} note an optional textarea for 
 *      @param {str} primary an optional dice equation
 *      @param {str} secondary an optional second dice equation
 *    @param {arr} bars an array of objects containing roll sets for this character
 *      @param {str} label the label for this bar (ie: "Health" or "2nd level spell slots")
 *      @param {bool} favorite set to true to give priority
 *      @param {int} max the maximum value for this bar
 *      @param {int} val the current value
 */

const defaultState = []

/**
 * Update the characters state
 * @param {obj} state the array of character objects
 * @param {str} type a String to identify how we want to update the state
 * @param {obj} payload the data we use to update the state
 * @returns {obj} The new state of characters
 */
const charactersReducer = (state=defaultState, { type, payload }) => {
  let saveToStorage = true
  const storageSets = load('sets')

  if(storageSets.length>0) {
    state = storageSets
  }

  switch (type) {
    default:
      saveToStorage = false
      break
    case "NewCharacter":
      state.push(payload)
    break
  }

  if(saveToStorage) {
    save('characters', state)
  }

  return state  
}

export default charactersReducer