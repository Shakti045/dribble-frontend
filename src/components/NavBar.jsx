import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { navlinks } from '../constants';
import { useDispatch, useSelector  } from 'react-redux';
import { clearUser } from '../redux/slices/userslice';
import { clearToken } from '../redux/slices/authslice';
import { IoMenu } from "react-icons/io5";
import SideDrawer from './SideDrawer';

const NavBar = () => {
  const {user} = useSelector  (state => state.user);
  const [opendrawer, setOpendrawer] = useState(false);
  const dispatch = useDispatch();
  const logout = ()=>{
    dispatch(clearUser());
    dispatch(clearToken());
  }
  return (
    <nav className='   h-16 w-full flex justify-between p-3  bg-slate-200 border-b-[1px] border-slate-400'>
        <ul className=' flex items-center gap-3'>
          <li>
            <Link to='/' className='  font-bold text-2xl'>Dribble</Link>
          </li>
          {navlinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className='max-md:hidden  text-gray-600 hover:text-gray-900'>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className='   flex items-center gap-2'>
          <div className='max-md:hidden  flex items-center gap-2 bg-slate-300   px-2 py-2 rounded-md'>
            <FaSearch className=' text-slate-400'/>
             <input type='text' placeholder='Search' className=' outline-none w-[100px] border-none bg-transparent'/>
          </div>
          {
            user==null ? <Link to='/signup' className=' bg-pink-600 max-sm:p-1 text-white px-3 py-2 rounded-md'>Sign Up</Link>:<div className=' flex gap-2 items-center'>
              
              <div className=' max-sm:hidden z-50  group flex gap-2 items-center'>
              <img src={user.avatarurl} alt='useravatar' className='  w-[40px] h-[40px] rounded-md'/>
                <p className=' hidden lg:block  text-gray-600'>{user.username}</p>
                  <div className='  -z-30   hidden group-hover:block absolute top-12  right-[104px] h-[50px] w-[50px]  bg-slate-300 rounded-md  rotate-45'>
                  
                  </div>
                  <ul className=' -z-30   hidden group-hover:block absolute  top-16 right-24 bg-white  rounded-md shadow-md'>
                    <li className=' mt-8'>
                      <Link to='/profile' className='block p-2 hover:bg-slate-200'>View Profile</Link>
                    </li>
                    <li>
                      <Link to='/profilecreate?update=true' className='block p-2 hover:bg-slate-200'>Update Profile</Link>
                    </li>
                  </ul>
              </div>

              <button onClick={logout} className=' max-sm:hidden bg-pink-600 text-white px-3 py-2  rounded-md'>Log out</button>
            </div>
          }

        </div>
        {
          user!==null && <div className=' max-sm:block hidden '>
          <IoMenu onClick={()=>setOpendrawer(!opendrawer)} className=' text-3xl text-slate-400'/>
        </div>
        }
     
          {
            opendrawer && <SideDrawer logout={logout} open={opendrawer} setOpendrawer={setOpendrawer} />
          }
       
    </nav>
  )
}

export default NavBar;