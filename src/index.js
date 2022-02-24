import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { MerchantProvider } from './context/merchants_context'

ReactDOM.render(
  <React.StrictMode>
    <MerchantProvider>
      <App />
    </MerchantProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
