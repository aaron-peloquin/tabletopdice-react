import express from 'express'
import cors from 'cors'
import { renderToString } from 'react-dom/server'

import React from 'react'
import TabletopDice from './TabletopDice'
// import * as serviceWorker from './serviceWorker'
import store from './store/store'
import { Provider } from 'react-redux'

const server = express()

server.use(cors)

server.use(express.static('public'))

server.get("*", (req, res, next) => {
  const markup = renderToString(<Provider store={store}><TabletopDice /></Provider>)

  res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <script src="/bundle.js" defer></script>
      </head>
      <body>
        <div id="TabletopDice">${markup}</div>
      </body>
    </html>
  `)
})

server.listen(3000, () => {
  console.log('Server is listening on port: 3000')
})
