import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import subscribed from './reducers'
import { Provider } from 'react-redux'
import App from './containers/App'

const store = createStore(subscribed);
const rootEl = document.getElementById('root');

render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
)