import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseState from './UseState.jsx'
import UseEffect from './UseEffect.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <UseState />
    <UseEffect />
  </React.StrictMode>,
)
