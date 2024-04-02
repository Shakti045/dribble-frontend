import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Mail from '../components/Mail';
import { useSearchParams } from 'react-router-dom';


const VeriFicationMailSend = () => {
  const [searchParams] = useSearchParams();
  const mail = searchParams.get('mail');
  if(!mail) return;
  return (
    <div className=' w-[100vw] min-h-[100vh] flex flex-col '>
      <NavBar/>
      <div className=' flex-1'>
        <Mail mail={mail}/>
      </div>
      <Footer/>
    </div>
  )
}

export default VeriFicationMailSend;