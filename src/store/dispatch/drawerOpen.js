import store from './../store'

/**
 * Updates store.drawer to true
 */
const drawerOpen = () => {
  store.dispatch({
    type: "OpenDrawer",
  })

}

export default drawerOpen