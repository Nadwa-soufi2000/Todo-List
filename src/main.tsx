import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Todos from './Components/Todos.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Todos>
         <App />
       </Todos>
   </StrictMode>,
)
