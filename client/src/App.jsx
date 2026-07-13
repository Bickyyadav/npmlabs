import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData, setAllUsers, setAllComponents } from './redux/userSlice';
import ComponentGenerator from './pages/ComponentGenerator';
import Pricingpage from './pages/Pricingpage';
import Componentspage from './pages/Componentspage';
import MyComponentsPage from './pages/MyComponentsPage';
import AdminDashboard from './pages/AdminDashboard';
// import { Button, EcommerceCard, SearchBox } from "virtual-ui-library01"

function App() {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0);
  const userData = useSelector((state) => state.user.userData);
  const [authChecked, setAuthChecked] = useState(false);


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
      } finally {
        setAuthChecked(true);
      }
    }
    fetchUser()
  }, [dispatch])

  useEffect(() => {
    const fetchAdminData = async () => {
      if (!userData) return;
      try {
        const [usersRes, componentsRes] = await Promise.all([
          axios.get(import.meta.env.VITE_SERVER_URL + `/api/user/all-users`, {
            withCredentials: true
          }),
          axios.get(import.meta.env.VITE_SERVER_URL + `/api/component/all-components`, {
            withCredentials: true
          })
        ]);
        dispatch(setAllUsers(usersRes.data));
        dispatch(setAllComponents(componentsRes.data));

      } catch (error) {
        console.log("🚀 ~ App ~ error:", error)
      }
    };
    fetchAdminData();
  }, [userData, dispatch])

  return (
    <>
      {/* Optional: small top loader */}
      {!authChecked && (
        <div className="fixed top-0 left-0 w-full h-1 bg-purple-500 animate-pulse z-50" />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/generate" element={<ComponentGenerator />} />
        <Route path="/pricing" element={<Pricingpage />} />
        <Route path="/component" element={<Componentspage />} />
        <Route path="/my-components" element={<MyComponentsPage />} />
      </Routes>
    </>
    // <>
    //   <Button />
    //   <EcommerceCard />
    //   <SearchBox />
    // </>
  )
}

export default App
