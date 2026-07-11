import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import { Button, Card, ProfileCard } from "virtual-ui-library01"
// import { Button } from '../../library/src'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      {/* <h1>hi here how are you?</h1>
      <Button />
      <Card />
      <ProfileCard/> */}
      <Route path='/' element={<Home />}>

      </Route>
    </Routes>
  )
}

export default App
