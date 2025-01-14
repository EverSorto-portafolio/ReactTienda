import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import {BrowserRouter}  from 'react-router' //npm install react-router-dom localforage match-sorter sort-by
import {ChakraBaseProvider, ChakraProvider} from '@chakra-ui/react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ChakraProvider>
    <App/>
    </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
