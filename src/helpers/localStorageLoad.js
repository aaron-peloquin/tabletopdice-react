/**
 * Load and parse a JSON string from localStorage
 * @param {str} key The key you want to load from localStorage (prefixed with "ttdr-")
 * @returns {obj} the parsed object from lcoalStorage
 */
const localStorageLoad = (key) => {
  let returnData = {}
  try {
    const localData = localStorage.getItem("ttdr-"+key)
    if(localData) {
      const localDataJSON = JSON.parse(localData)
      if(localDataJSON) {
        returnData = localDataJSON
      }
    }
  }
  catch(e) {
    console.warn("localStorage is diabled, cannot load")
  }
  return returnData
}


export default localStorageLoad