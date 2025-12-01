import React from 'react'
import { FaInstagram , FaLinkedin, FaFacebook} from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <div className='d-flex justify-content-center' style={{backgroundColor:"black"}}>
        <div className='d-flex align-tems-center justify-content-center ms-2' style={{width:"70px" ,height:"50px" }}>
         <a href=''><FaInstagram className='mt-2'/></a>
        </div>
           <div className='d-flex align-tems-center justify-content-center ms-2' style={{width:"70px" ,height:"50px" }}>
        <a href=''><FaFacebook className='mt-2'/></a> 
        </div>
           <div className='d-flex align-tems-center justify-content-center ms-2' style={{width:"70px" ,height:"50px"}}>
        <a href=''><FaLinkedin className='mt-2'/></a>
        </div>
       
     
    </div>
    <div className='d-flex justify-content-center text-white' style={{backgroundColor:"black"}}>
            <h6>Thanks for visiting ...</h6>
    </div>

    </>
   
  )
}

export default Footer