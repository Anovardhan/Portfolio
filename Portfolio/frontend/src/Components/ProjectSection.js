import React from 'react'
import { useState,useEffect } from 'react'

const ProjectSection = () => {
    const[projects ,setprojects] = useState([])
    const [loading,setloading] = useState(true)
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/project/").then((res)=>res.json()).then((data)=>{
            setprojects(data)
            setloading(true)
            console.log(data)
        })
    },[])
  return (
    <div className='container mt-5'  style={{ width:"600px" , height:"270px"}} data-aos="zoom-in" >
    <h3 className="text-white" >Projects</h3>
    {
        projects.map((p,index)=>(
            <div key={index} className='d-flex align-items-center mt-4'>
                <img src={p.image} width={50} height={50} style={{borderRadius:"30px"}}/>
                <div className='projects'>
                     <h5 className='ms-3'><a href={p.link} target='_blank' style={{textDecoration:"none",color:"white"}}>{p.title}</a></h5>
                </div>
             
               
            </div>
        ))
    }



    </div>
  )
}

export default ProjectSection