import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import drawerOpen from './../store/dispatch/drawerOpen'

/**
 * Returns components for the top heading
 */
const HtmlHead = () => {
  return <AppBar position="static">
    <Toolbar>
      <IconButton onClick={drawerOpen}>
        <MenuIcon aria-label="Menu"></MenuIcon>
      </IconButton>
    </Toolbar>
  </AppBar>
}

export default HtmlHead