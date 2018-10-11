import store from './../store'

/**
 * Updates store.drawer to false
 */
const drawerOpen = () => {
  store.dispatch({
    type: "CloseDrawer",
  })

}

export default drawerOpen