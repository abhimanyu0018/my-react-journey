import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App name="abhimanyu">
      <button>click me</button>
    </App>
    <App name="srijan" />
    <App name="arish" />
    
  </React.StrictMode>,
)
