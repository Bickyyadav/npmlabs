import { useState } from 'react'
import './App.css'
import { Button, Card, ProfileCard } from "virtual-ui-library01"
// import { Button } from '../../library/src'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hi here how are you?</h1>
      <Button />
      <Card />
      <ProfileCard/>
    </>
  )
}

export default App
