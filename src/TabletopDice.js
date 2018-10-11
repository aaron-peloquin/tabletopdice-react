import React from 'react';
import Head from './element/HtmlHead'
import Section from './element/HtmlSection'
import Drawer from './element/HtmlDrawer'


/**
 * Default wrapping component for the whole app
 */
const TabletopDice = () => {
    return <div>
      <Head />
      <Drawer />
      <Section />
    </div>
}

export default TabletopDice