import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/normalize.css'
import './index.css'
import { Provider } from 'react-redux'
import App from './pages/APP/App'
import * as serviceWorker from './serviceWorker'
// store
import store from './store'
// i18n
import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
