import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './alx-react-app-new/src/App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

<header style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center' }}>
    <h1>My Favorite Cities</h1>
</header>
