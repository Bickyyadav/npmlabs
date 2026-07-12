import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/userSlice';
import ComponentGenerator from './pages/ComponentGenerator';
import { Button, ProfileCard,EcommerceCard } from "virtual-ui-library01"

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch()


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_SERVER_URL + "/api/user/currentuser", {
          withCredentials: true
        })
        dispatch(setUserData(res.data))

      } catch (error) {
        console.log("🚀 ~ fetchUser ~ error:", error)
        dispatch(setUserData(null));
      }
    }
    fetchUser()
  }, [])

  return (
    // <Routes>
    //   <Route path='/' element={<Home />} />
    //   <Route path="/generate" element={<ComponentGenerator />} />
    // </Routes>
    <>
      <Button />
      <ProfileCard/>
      <EcommerceCard />
    </>
  )
}

export default App
