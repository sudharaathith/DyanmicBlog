import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes ,Router } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route/>
      </Routes>
    </Router>
  )
}

export default App
