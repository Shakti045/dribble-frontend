import React from 'react'
import { Link } from 'react-router-dom'
import SignupForm from '../components/SignupForm'

const Signup = () => {
  return (
    <div className=' w-full  min-h-[100vh] flex justify-between'>
     <div className=" max-md:hidden bg-signupbg    min-h-[100vh] w-[40%] bg-center  bg-cover bg-no-repeat">
     </div>
     <div className=' max-md:w-[100%]   w-[60%] '>
       <div className=' p-3 flex flex-col gap-10'>
        <p1 className=' w-full flex justify-end '>Alrady a member? <Link to='/signin' className=' text-blue-500'>Sign in</Link></p1>
        <div className=' w-full flex justify-center items-center'>
        <SignupForm/>
        </div>
       </div>
     </div>
    </div>
  )
}

export default Signup