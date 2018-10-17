// src/browser/index.js

import React from 'react'
import { hydrate } from 'react-dom'
import TabletopDice from './TabletopDice'

hydrate(
  <TabletopDice />,
  document.getElementById('TabletopDice')
);