import React, { useEffect, useState } from "react";


const EducationSection = () => {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
   const [tools, setTools] = useState([]);


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/education/")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log("Error:", err));

     fetch("http://127.0.0.1:8000/api/skills/").then((res)=>res.json()).then((data)=>{
    setTools(data)
    console.log(data)
     })
  }, []);

  const nextItem = ()=>{
    setIndex((pre)=>(pre+1) % items.length);
  }

  const preItem = ()=>{
    setIndex((pre)=>(pre-1 + items.length) % items.length);
  }

  if(items.length === 0) return <div>loading......</div>

  const current = items[index]

  

  return (
    <>
    
     <div className="container " style={{ width:"600px" , height:"450px" }} >
        <h3 className="text-white" data-aos="fade-up" >Education</h3>
        <div className="d-flex justify-content-center" data-aos="fade-up">
        <div className="edu-card shadow-lg p-3 rounded-4">
            <img src={current.institution_image} className="edu-img rounded-4"/>
        <div className="mt-2">
            <div className="d-flex align-items-center">
                 <h5 className="text-white fw-semibold">{current.institution_name}</h5>
                 <div className="d-flex  mt-2" style={{marginLeft:"200px"}}>
                 <button className="btn  btn-outline-light me-2 " onClick={preItem} style={{border:"1px solid gray"}}><h4>&lt;</h4></button>
                 <button className="btn  btn-outline-light me-2"  onClick={nextItem} style={{border:"1px solid gray"}}><h4>&gt;</h4></button>
                 </div>
              
            </div>
           
            <p className="text-secondary mb-1">{current.year_span}</p>
            <p className=" ">GPA Percentage : {current.gpa_percentage}</p>

        </div>

        </div>
        </div>



      
    
   
    </div>
   <div className="container py-4"  style={{ width:"600px" , height:"450px" }}>
  <h3 className="text-white mb-4">Tool Stack</h3>

  <div className="row g-3">
    {tools.map((tool, idx) => (
      <div key={idx} className="col-6">
        <div
          className="d-flex align-items-center p-3 rounded"
          style={{
            background: "#1a1a1a",
            border: "1px solid #333",
            height: "70px"
          }}
        >
          <img
            src={tool.skill_image}
            alt={tool.skill_name}
            style={{ width: 32, height: 32, marginRight: 12 }}
          />
          <span className="text-white">{tool.skill_name}</span>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
   
    
  );
};

export default EducationSection;
