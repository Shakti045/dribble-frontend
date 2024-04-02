import React, { useState } from 'react'
import ProfileStepOne from '../components/ProfileStepOne'
import ProfileStepTwo from '../components/ProfileStepTwo'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';



const ProfileCreate = () => {
  const [step,setStep] = useState(1);

  const [details,setDetails] = useState({
    profilephoto:null,
    location:'',
    image:null,
    accounttype:[],
  });
  return (
    <div className='  h-[100vh] w-full p-3 flex  flex-col gap-6'>
      <div className=' flex gap-3 items-center'>
      <Link to='/' className=' text-pink-600  font-bold text-2xl'>Dribble</Link>
      {
        step ===2 && <button onClick={()=>setStep(1)} className=' p-2 rounded-md bg-slate-300'><IoIosArrowBack/></button>
      }
      </div>
      {
        step ===1 && <ProfileStepOne details={details} setDetails={setDetails} setStep={setStep}/>
      }
      {
        step ===2 && <ProfileStepTwo details={details} setDetails={setDetails} setStep={setStep}/>
      }
    </div>
  )
}

export default ProfileCreate