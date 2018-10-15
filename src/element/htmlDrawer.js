import React from 'react'

import { connect } from 'react-redux'
import drawerClose from './../store/dispatch/drawerClose'
import drawerOpen from './../store/dispatch/drawerOpen'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import AddCircleIcon from '@material-ui/icons/AddCircle'
import FaceIcon from '@material-ui/icons/Face'

/**
 * Returns components for the left side nav
 */
const HtmlDrawer = (props) => {
  const { open, characters } = props
  let i = 0
  return <SwipeableDrawer
    anchor="left"
    open={open}
    onClose={drawerClose}
    onOpen={drawerOpen}
    >
  <Typography variant="h6">Characters</Typography>
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText inset primary="New Character" />
      </ListItem>
      {characters.map(c=>{
        i++
        return <ListItem button key={i}>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText inset primary={c.name} />
        </ListItem>})}
    </List>
  </SwipeableDrawer>

}

const mapStateToProps = (state) => {
  return {
    open: state.drawer,
    characters: state.characters,
  }
}

export default connect(mapStateToProps)(HtmlDrawer)