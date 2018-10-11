import React from 'react';
import drawerClose from './../store/dispatch/drawerClose'
import Drawer from '@material-ui/core/Drawer';
import { connect } from 'react-redux';

/**
 * Returns components for the left side nav
 */
const HtmlDrawer = (props) => {
  const { open } = props
  return <Drawer
    anchor="left"
    open={open}
    onClose={drawerClose}>

  </Drawer>

}

const mapStateToProps = (state) => {
  return {
    open: state.drawer
  }
}

export default connect(mapStateToProps)(HtmlDrawer)