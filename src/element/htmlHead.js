import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';

/**
 * Returns components for the top heading
 */
const HtmlHead = () => {
  return <AppBar position="static">
    <Toolbar>
      <IconButton >
        <MenuIcon aria-label="Menu"></MenuIcon>
      </IconButton>
    </Toolbar>
  </AppBar>
}

export default HtmlHead