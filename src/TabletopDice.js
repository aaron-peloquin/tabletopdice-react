import React from 'react'
import Head from './element/HtmlHead'
import Section from './element/HtmlSection'
import Drawer from './element/HtmlDrawer'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme'

/**
 * Default wrapping component for the whole app
 */
const TabletopDice = () => {
    return <MuiThemeProvider theme={theme}>
      <Head />
      <Drawer />
      <Section />
    </MuiThemeProvider>
}

export default TabletopDice