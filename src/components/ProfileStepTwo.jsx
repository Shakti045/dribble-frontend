import React from 'react'
import { accountoptions } from '../constants'
import { IoIosRadioButtonOff , IoIosRadioButtonOn  } from "react-icons/io";
import toast from 'react-hot-toast';
import { uploadImage } from '../utils/uploadImage';
import axios from 'axios';
import { userurl } from '../services/url';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setUser } from '../redux/slices/userslice';


const ProfileStepTwo = ({setDetails,details}) => {
  const {token} = useSelector((state)=>state.auth);
  const {accounttype} = details;
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const addoption=(option)=>{
        setDetails({...details,accounttype:[...accounttype,option]})
    }
    const removeoption=(option)=>{
        setDetails({...details,accounttype:[...accounttype.filter((item)=>item!==option)]});
    }

    const finish = async()=>{
      const loadingtoast = toast.loading('Please wait....')
       try{
         const securedurl = await uploadImage(details.profilephoto)
         if(!securedurl)  {
            toast.error('Something went wrong!');
            return;
         }
         const data ={};
          data.avatarurl = securedurl;
          data.location = details.location;
          data.acccountType = accounttype;
  
          const updateduser = await axios.post(userurl.profileupdate,data,{
            headers:{
              Authorization:`Bearer ${token}`
            }
          });
          if(updateduser.status === 200){
            toast.success('Profile updated successfully');
            dispatch(setUser(updateduser.data.user));
            navigate('/');
          }
       }catch(err){
           console.log(err);
            toast.error('Something went wrong!')
       }finally{
         toast.dismiss(loadingtoast);
       }
    };
  return (
    <div className=' h-full flex flex-col  justify-between   items-center'>
          <div className=' flex flex-col gap-2 items-center'>
           <p className=' text-3xl font-bold'>What bring's you to dribble?</p>
           <p className=' text-slate-400'>Select the option that best describe you. Don't worry you can explore other options later</p>
           </div>
          <div className=' grid grid-cols-3 max-sm:grid-cols-1  gap-3 '>
            {
                accountoptions.map((option)=>{
                    return <div onClick={()=>{
                      accounttype.indexOf(option.id)===-1?addoption(option.id):removeoption(option.id)
                    }} key={option.id} className=' cursor-pointer w-[30vw] max-w-[300px] max-sm:w-[90vw] flex flex-col  justify-center items-center gap-5 p-3 rounded-md border-[1px] border-slate-300'>
                      <img src={option.image} alt={option.title} className=' w-[100px] h-[100px] object-cover '/>
                      <h1 className=' font-bold text-lg text-center'>
                        {option.title}
                      </h1>
                      {
                        accounttype.indexOf(option.id)!==-1 ? <IoIosRadioButtonOn className=' text-pink-600 text-3xl'/> : <IoIosRadioButtonOff className=' text-slate-400 text-3xl'/>
                      }
                    </div>
                })
            }
          </div>

        <div className=' flex flex-col gap-2 items-center'>
        {
            accounttype.length!==0 && <h1 className=' font-bold'>Anything else?You can select multiple</h1>
        }
        <button onClick={finish} disabled={accounttype.length===0} className={`${accounttype.length===0?' bg-pink-300 ':'bg-pink-600'} w-fit text-white p-2 px-6 rounded-md`}>Finish</button>
        </div>
    </div>
  )
}

export default ProfileStepTwo