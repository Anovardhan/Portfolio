import React from 'react'
import { useState,useEffect } from 'react'

const About = () => {
    const [inf , setinf] = useState([])
    const [about,setabout] = useState([])
    const [journey,setjourney] = useState([])


    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/myinf/').then((res)=>res.json()).then((data)=>{
            setinf(data[0])
            //console.log(data)
        })
        fetch('http://127.0.0.1:8000/api/about/').then((res)=>res.json()).then((data)=>{
            setabout(data)
            console.log(data[0].my_journey)
            setjourney(data[0].my_journey)

        })

    },[])
  return (
   <div
  className="d-flex justify-content-center align-items-center text-white p-5"
  style={{ width: "100%", background: "black" }}
   data-aos="fade-up"
>
  <div
    className="mt-4 mx-auto d-flex flex-column justify-content-center align-items-center"
    style={{
      width: "70%",
     
    }}
  >
    <h1 className="text-center mt-3">
      Hi 👋 I'm {inf.name} and I like building my ideas.
    </h1>

    <div className="container mt-4">
  <div className="row align-items-center">

    {/* Image Section */}
    <div className="col-md-6 col-12 mb-3">
      <div style={{ width: "100%", height: "300px" }}>
        <img
          src={inf.village_image}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>

    {/* Text Section */}
    <div className="col-md-6 col-12 mb-3">
      <p style={{ fontSize: "17px" }}>
        I was born in <strong>Godavarikhani</strong>, a place that holds my earliest memories
        and a special part of my life. It is where my journey began,
        surrounded by familiar faces, warmth, and the roots that shaped who I
        am today.
      </p>
    </div>
  </div>
</div>

   <div className="container mt-5">
  <div className="row g-3">

    <div className="col-12 col-sm-6 col-md-4">
      <div style={{ width: "100%", height: "270px" }}>
        <img
          src={inf.my_image1}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4">
      <div style={{ width: "100%", height: "270px" }}>
        <img
          src={inf.my_image2}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>

    <div className="col-12 col-sm-6 col-md-4">
      <div style={{ width: "100%", height: "270px" }}>
        <img
          src={inf.my_image3}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>

  </div>
</div>
<div className=' container mt-5'>
    <h2>My Journey</h2>
    <h6 style={{color:"gray"}}>{journey}</h6>
</div>
<div className='container mt-2'>
{
    about.map((a)=>(
       <div className='container mt-3 '>
    <h4>{a.title}</h4>

    <div 
        className='d-flex justify-content-center align-items-center mx-auto'
        style={{width:"400px", height:"300px", borderRadius:"40px"}}
    >
        <img 
            src={a.image} 
            width="100%" 
            height="100%" 
            style={{borderRadius:"20px", objectFit:"cover"}} 
            className='mt-2'
        />
    </div>

    <h6 style={{color:"gray"}} className='mt-4'>{a.information}</h6>
</div>
    ))
}
</div>

  </div>
</div>
  )
}

export default About