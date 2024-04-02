import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Loader from './Loader';
import { authurl } from '../services/url';
import { useNavigate } from 'react-router';
console.log(authurl.signup)

const SignupForm = () => {
  const [details,setDetails] = useState({name:'',username:'',email:'',password:''});
  const [terms,setTerms] = useState(false);
  const [loading,setLoading] = useState(false);
  const navigate= useNavigate();
  const handleChange=(e)=>{
    setDetails({...details,[e.target.name]:e.target.value})
  };
  const handleSubmit=async (e)=>{
    e.preventDefault();
    if(!terms) return;
    if(details.password.trim().length<6) return toast.error('Minimum password length is 6');
    setLoading(true);
    try {
      const {name,username,email,password} = details;
      const data =  await axios.post(authurl.signup,{name,username,email,password});
      if(data.status ===200){
         navigate(`/verifymail?mail=${details.email}`)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong!')
      console.log("error in signup form =>",error)
    }finally{
      setLoading(false);
    }
  };
  return (
    <div className='  flex flex-col gap-4'>
       <h1 className=' font-bold text-3xl'>Sign up to dribble</h1>
       <form onSubmit={handleSubmit} className=' mt-6 flex flex-col gap-8'>
        <div className=' max-sm:flex-col flex gap-3'>
        <div>
            <label htmlFor='name'><p className=' font-bold'>Name</p></label>
            <input name='name' onChange={handleChange} value={details.name} required type='text' id='name' placeholder='Enter your name' className=' w-full  p-2 border-[1px] border-none outline-none bg-slate-200 rounded-md'/>
        </div>
        <div>
            <label htmlFor='username'><p className='  font-bold'>Username</p></label>
            <input name='username' onChange={handleChange} value={details.username} required type='text' id='username' placeholder='Enter your username' className='w-full  p-2 border-[1px]  border-none outline-none bg-slate-200 rounded-md'/>
        </div>
        </div>
       
           <div className=' flex flex-col'>
           <label htmlFor='email'><p className=' font-bold'>Email</p></label>
            <input name='email' onChange={handleChange} value={details.email} required type='email' id='email' placeholder='Enter your email' className='  p-2 border-[1px]  border-none outline-none bg-slate-200 rounded-md'/>
           </div>

         <div className=' flex flex-col'>
            <label htmlFor='password'><p className=' font-bold'>Password</p></label>
            <input name='password' onChange={handleChange} required value={details.password} type='password' id='password' placeholder='6+ Characters' className='  p-2 border-[1px]  border-none outline-none bg-slate-200 rounded-md'/>
        </div>
        <div className=' flex  gap-2'>
           <input value={terms} onChange={()=>setTerms(!terms)} id='check' type='checkbox'/>
              <label htmlFor='check'><p className=' font-bold'>I agree to the terms and conditions</p></label>
        </div>
        <div className=' flex gap-2'>
            <button disabled={!terms || loading} className={`text-white p-2 rounded-md ${terms?'bg-pink-700':'bg-pink-300'}`}>
              {
                loading?<Loader/>:'Create account'
              }
            </button>
            
        </div>
     
       </form>
    </div>
  )
}

export default SignupForm