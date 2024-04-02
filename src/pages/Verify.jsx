import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import toast from 'react-hot-toast';
import axios from 'axios';
import { authurl } from '../services/url';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/slices/authslice';
import { setUser } from '../redux/slices/userslice';


const Verify = () => {
    const location = useLocation();
    const id = location.pathname.split('/').at(-1);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function verifymail(){
        setLoading(true);
        try {
            const responce = await axios.post(authurl.verifymail,{id});
            console.log(responce)
            if(responce.status === 200){
                toast.success(responce.data.message);
                dispatch(setToken(responce.data.token));
                dispatch(setUser(responce.data.user));
                navigate('/profilecreate');
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong!');
        }finally{
            setLoading(false);
        }
    };
    
    useEffect(()=>{
        // eslint-disable-next-line
        verifymail();
    },[id]);
    if(!id || id==='verify') return;
    return (
        <div className=' w-[100vw] h-[100vh] flex flex-col '>
      <NavBar/>
       <div className=' min-h-[calc(100vh-4rem)]  flex flex-col gap-3 justify-center items-center'>
         {
              loading && <>
                  <Loader/>
                  <p className='text-center text-xl font-bold'>Please wait we are verifying your details.......</p>
              </>
         }
     
       </div>
      <Footer/>
    </div>
  )
}

export default Verify
