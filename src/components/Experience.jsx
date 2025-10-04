import React from 'react'
import experience from './Data/experience.json'


const Experience = () => {
  return (
    <>
    <div className="container ex" id='experience'>
      <h1>EXPERIENCE</h1>
      {
        experience.map((exp)=>{
          return(
            <div className="ex-items text-center my-5 " key={exp.id}
            data-aos="zoom-in"
            data-aos-duration="1000"
            >
              <div className="left">
                <img src={`/asset/${exp.imageSrc}`} alt="" />
              </div>
              <div className="right">
                <h2>{exp.role}</h2>
                <h4><span style={{color:"yellowgreen"}}>{exp.startDate}{" "}{exp.endDate}</span>{" "}<span style={{color:"yellow"}}>{exp.location}</span></h4>
                <h5><span style={{color:"yellow"}}>{exp.experiences[0]}</span></h5>
                <h5><span style={{color:"yellow"}}>{exp.experiences[1]}</span></h5>
              </div>
            </div>
          )
        })
      }

    </div>
    
    
    
    </>
  )
}

export default Experience