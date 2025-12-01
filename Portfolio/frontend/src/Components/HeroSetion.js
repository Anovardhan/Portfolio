import React from 'react'
import { useState,useEffect } from 'react'


const HeroSetion = () => {
    const [myself,setmyself] = useState(null)
    const [loading , setloading] = useState(true)

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/myself/").then((res)=>res.json()).then((data)=>{
            setmyself(data[0])
            setloading(false)
           // console.log(data[0])
        })
    },[])

    if(loading) return <div>loading....</div>
  return (
     
        <div className='container p-0 d-flex align-items-center' style={{ width:"600px" , height:"400px"}}>
         <div className=' mb-4' >

            <div className='rounded-circle me-3 ' style={{width:"70px" ,height:"70px" , overflow:"hidden"}} data-aos="fade-up">
                <img  src={myself.profile_image} style={{width:"100%" ,height:"100%" ,objectFit:"cover"}}/>

            </div>
            <div className='mt-1' data-aos="fade-up">
                <h2 className='mb-0'>Hey , {myself.name} here </h2>
                <p className='mt-1'>{myself.about}</p>
            </div>

         </div>

        </div>

 
  
  )
}

export default HeroSetion