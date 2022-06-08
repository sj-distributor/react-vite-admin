import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './App'
import { HoxRoot } from 'hox'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HoxRoot>
      <App />
    </HoxRoot>
  </React.StrictMode>
)
