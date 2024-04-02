import React from 'react';
import { Link } from 'react-router-dom';
import { navlinks } from '../constants';
import { useSelector } from 'react-redux';
import { ImCross } from "react-icons/im";


const SideDrawer = ({open,setOpendrawer}) => {
  
const {user} = useSelector((state)=>state.user);

  return (
    <div className={` absolute top-0 left-0 bottom-0  ${open && ' right-10 '} overflow-hidden bg-slate-300 p-4 `}>
      <nav className=' flex flex-col gap-5'>
        <div className=' flex  justify-between'>
            <div className=' flex flex-col gap-2 '>
            <img src={user.avatarurl} alt='useravatar' className=' w-[40px] h-[40px] rounded-md'/>
                <p className='  font-bold text-gray-600'>{user.username}</p>
            </div>
            <button className=' h-fit w-fit p-2 border-2 rounded-md border-slate-500'>
                <ImCross onClick={()=>setOpendrawer(false)} className=' text-gray-600'/>
            </button>
        </div>
        <ul className=' flex flex-col gap-3'>
        {
        navlinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className='  text-gray-600 hover:text-gray-900'>{link.title}</Link>
            </li>
          ))}
        </ul>
       <ul className=' flex flex-col gap-3 '>
       <li>
        <Link to='/profile'>View Profile</Link>
        </li>
        <li>
        <Link to='/profilecreate' >Update Profile</Link>
        </li>
       </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;
