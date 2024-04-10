import React from 'react';
import { FaDribbble, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import {footerlinks} from '../constants';


const Footer = () => {
  return (
    <footer className=' w-full flex flex-col    gap-5 bg-gray-800 text-white'>
      <div className=" w-full p-3    flex  max-sm:flex-col  gap-10">
      <div className=' flex flex-col gap-3'>
        <h1 className='font-bold text-2xl'>Dribble</h1>
        <p className=' text-slate-400'>Dribble is the world's leading<br/> community for creatives<br></br> to share grow.and get hired</p>
        <div className="flex space-x-4">
            <FaDribbble className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-purple-500 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
      <div className=' flex-1 grid grid-cols-5 max-sm:grid-cols-2 max-md:grid-cols-2  justify-between'>
      {
        footerlinks.map((item)=>{
            return <div className=' flex flex-col gap-3'>
                <h1 className=' font-bold text-lg'>{item.headingtext}</h1>
                <ul className=' flex flex-col gap-2'>
                    {
                        item.links.map((link)=>{
                            return <li>
                                <a href={link.path} className=' text-slate-400 text-sm hover:text-blue-500'>{link.title}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
        })
      }
      </div>
      </div>
      <div className=' flex max-sm:flex-col justify-between border-t-[1px]   border-slate-400 p-3 '>
        <p className=' text-center text-sm'>© 2021 Dribbble. All rights reserved.</p>
        <p className=' text-center'>20,145,635 shots dribbled</p>
      </div>
    </footer>
  );
};

export default Footer;
