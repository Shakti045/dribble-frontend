import React from 'react'
import { FaCamera } from "react-icons/fa";
import { toast } from 'react-hot-toast';



const ProfileStepOne = ({setStep,setDetails,details}) => {
  function filechangehandler(e){
    const file=e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = () => {
      setDetails((prev)=>({...prev,profilephoto:file,image:reader.result}));
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
  }

  return (
     <div className='  h-full flex flex-col   items-center'>
           <div className=' h-full  flex flex-col  justify-between '>
           <div>
           <p className=' text-3xl font-bold'>Welcome! Let's create your profile</p>
           <p className=' text-slate-400'>Let's other know you better</p>
           </div>
           <div className=' flex flex-col  gap-4'>
            <p className=' font-bold text-xl'>Add an avatar</p>
            <div className=' flex max-sm:flex-col items-center gap-5'>
                <div className=' flex justify-center items-center w-[150px] h-[150px] rounded-full border-2 border-dashed '>
                {
                    details.image!=null ? <img src={details.image} alt='profile' className=' w-full h-full object-cover rounded-full'/>:<FaCamera className=' text-5xl text-slate-400'/>
                }
                </div>
                <label htmlFor='file' >
                    <p className=' cursor-pointer p-2   border-2  border-slate-300 rounded-md'>Upload a photo</p>
                </label>
                <input onChange={filechangehandler} type='file' id='file' className=' hidden'/>
            </div>
           </div>
           <div className=' flex flex-col gap-3'>
              <p className=' font-bold text-xl'>Add your location</p>
                <input value={details.location} onChange={(e)=>{
                  setDetails((prev)=>({...prev,location:e.target.value}))
                }} type='text' placeholder='Enter your location' className='  outline-none border-b-[2px] border-slate-400 '/>
           </div>
           <div>
                <button onClick={()=>{
                  if(details.location.trim().length===0 || !details.image) {
                    toast.error('Please fill all the fields');
                    return;
                  }
                  setStep(2)
                }} className='  bg-pink-600 text-white p-2 px-6 rounded-md'>Next</button>
           </div>
           </div>
      </div>
  )
}

export default ProfileStepOne