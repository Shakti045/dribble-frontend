import React from 'react'
import { accountoptions } from '../constants'


const ProfileCard = ({user}) => {
  return (
    <div className='  flex flex-col gap-3 p-5 rounded-md bg-slate-200 '>
        <div className=' flex gap-2 items-center'>
            <img src={user.avatarurl} alt='useravatar' className=' w-[50px] h-[50px] rounded-full'/>
            <p className=' font-bold text-xl'>{user.username}</p>
        </div>
        <div className=' flex flex-col gap-2'>
            <p className=' font-bold'>Name</p>
            <p>{user.name}</p>
        </div>
        <div className=' flex flex-col gap-2'>
            <p className=' font-bold'>Email</p>
            <p>{user.email}</p>
        </div>
        <div className=' flex flex-col gap-2'>
            <p className=' font-bold'>Location</p>
            <p>{user.location}</p>
        </div>
        <div className=' flex flex-col gap-2'>
            <p className=' font-bold'>Account Type</p>
            <div className=' flex flex-col gap-2'>
              {
                user.acccountType.map((index)=>{
                   return <li key={index}>{accountoptions[index-1].title}</li>
                })
              }
            </div>
            </div>
    </div>
  )
}

export default ProfileCard