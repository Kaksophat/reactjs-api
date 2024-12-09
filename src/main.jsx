import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextprovider from './components/context/Shopcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextprovider>
    <App />
    </ShopContextprovider>
  </StrictMode>
)
