import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import axios from 'axios';
import { authurl } from '../services/url';
import Loader from '../components/Loader';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setUser } from '../redux/slices/userslice';
import { setToken } from '../redux/slices/authslice';
import toast from 'react-hot-toast';

const Signin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const signin=async()=>{
        setLoading(true);
        try{
         const response = await axios.post(authurl.signin,{email,password});
         if(response.status === 200){
             dispatch(setUser(response.data.user));
             dispatch(setToken(response.data.token));
             navigate('/');
         }
        }catch(err){
            console.log(err);
            toast.error(err?.response?.data?.message || 'Something went wrong!')
        }finally{
            setLoading(false);
        }
    }
  return (
    <div className='w-full min-h-[100vh] bg-pink-100  flex flex-col justify-center items-center'>
        <NavBar/>
        <div className='h-[calc(100vh-4rem)] flex justify-center items-center'>
        <form className='   flex flex-col gap-8  p-6 bg-pink-300 rounded-md'>
           <h1 className=' font-bold text-3xl'>Sign in to dribble</h1>
            <div className=' flex flex-col'>
            <label htmlFor='email'><p className=' font-bold'>Email</p></label>
            <input required value={email} onChange={(e)=>setEmail(e.target.value)} type='email' id='email' placeholder='Enter your email' className=' p-2 border-[1px] border-none outline-none bg-slate-200 rounded-md'/>
            </div>
            <div className=' flex flex-col'>
            <label htmlFor='password'><p className=' font-bold'>Password</p></label>
            <input required value={password} onChange={(e)=>setPassword(e.target.value)} type='password' id='password' placeholder='Enter your password' className=' p-2 border-[1px] border-none outline-none bg-slate-200 rounded-md'/>
            </div>
            <div className=' flex justify-center'>
            {
                loading?<Loader/>:<button onClick={signin} className=' bg-pink-600 text-white px-3 py-2 rounded-md'>Sign in</button>
            }
            </div>
        </form>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Signin