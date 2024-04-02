import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const {user} = useSelector((state)=>state.user);
  console.log(user)
  return (
    <div className=' w-full min-h-[100vh] flex flex-col'>
        <NavBar/>
        <div className='  h-[calc(100vh-4rem)] flex flex-col justify-around   items-center'>
            <p className=' text-center p-3 rounded-full bg-slate-300'>Over 3 million ready-to-work-creatives!</p>
            <p className=' text-center max-sm:text-xl max-md:text-3xl  font-bold text-7xl'>
            The world’s destination 
            </p>
            <p className='max-sm:text-xl max-md:text-3xl font-bold text-7xl'>
            for design
            </p>
            <p className=' text-center font-bold'>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
            {
              user?<p className=' font-bold text-2xl'>{`Welcome ${user.username}`}</p>:<Link to='/signup' className=' bg-pink-600 text-white px-3 py-2 rounded-md'>Get Started</Link>
            }
        </div>
        <Footer/>
    </div>
  )
}

export default Home