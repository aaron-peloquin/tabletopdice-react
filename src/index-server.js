import express from 'express'
import cors from 'cors'
import { renderToString } from 'react-dom/server'

import React from 'react'
import App from './App'
import store from './store/store'
import { Provider } from 'react-redux'
// import * as serviceWorker from './serviceWorker'

const server = express()

server.use(cors)

server.use(express.static('public'))

server.get("*", (req, res, next) => {
  const markup = renderToString(<Provider store={store}><App /></Provider>)
  const preloadedState = store.getState()

  const dom = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <script src="/bundle.js" defer></script>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
      </head>
      <body>
        <div id="TabletopDice">${markup}</div>
      </body>
    </html>`
  res.send(dom)
})

server.listen(3000, () => {
  console.log(markup)
})
