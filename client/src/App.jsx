import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import axios from 'axios';
// import { Button, Card, ProfileCard } from "virtual-ui-library01"
// import { Button } from '../../library/src'

function App() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_SERVER_URL + "/api/user/currentuser", {
          withCredentials: true
        })
        console.log("🚀 ~ fetchUser ~ res:", res)

      } catch (error) {
        console.log("🚀 ~ fetchUser ~ error:", error)
      }
    }
  }, [])

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
