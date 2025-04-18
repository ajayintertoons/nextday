import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./style/font.css"
import { MyContextProvider } from './utils/context_api/context.jsx'
import { Provider } from 'react-redux'
import { store } from '../store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <MyContextProvider>
    <App />
  </MyContextProvider>
  </Provider>
)
