import React from 'react'
import Auth from '../components/Auth'
import { useState } from 'react'

const Home = () => {
    const [showAuth, setShowAuth] = useState(true)
    return (
        <div className='bg-red-300'>Home
            {showAuth && <Auth onClose={() => setShowAuth(false)} />}
        </div>
    )
}

export default Home