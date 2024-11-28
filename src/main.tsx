// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Type assertion for getElementById since it could potentially be null
const rootElement = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
