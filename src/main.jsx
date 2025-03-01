import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ChakraProvier } from './components/ui/provider'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
    <ChakraProvier>
      <App/>
    </ChakraProvier>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
