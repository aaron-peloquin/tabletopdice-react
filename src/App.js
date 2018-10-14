import React from 'react'
import Head from './element/HtmlHead'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme'

/**
 * Default wrapping component for the whole app
 */
const TabletopDice = () => {
  return <MuiThemeProvider theme={theme}>
      <Head />
      <p>Hello world</p>
    </MuiThemeProvider>
}

export default TabletopDice