import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { useSelector } from 'react-redux';
import { userurl } from '../services/url';
import axios from 'axios';
import ProfileCard from '../components/ProfileCard';
import toast from 'react-hot-toast';

const Profile = () => {
 const [loading,setLoading] = useState(true);
 const [user,setUser] = useState(null);
 const {token}  = useSelector((state)=>state.auth);

  const getProfile = async()=>{
    setLoading(true);
    try {
      const data = await axios.get(userurl.getprofile,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      if(data.status === 200) {
        setUser(data.data.user);
        console.log(data.data.user)
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!')
    }finally{
      setLoading(false);
    }
  }
useEffect(()=>{
getProfile();
},[])
  return (
      <div className=' min-h-[100vh] w-[100vw] flex flex-col '>
        <NavBar/>
        <div className=' h-[calc(100vh-4rem)] w-full flex justify-center items-center'>
           {
                loading?<Loader/>:<>
                    {
                        user && <ProfileCard user={user}/>
                    }
                </>
           }
        </div>
        <Footer/>
      </div>
  )
}

export default Profile