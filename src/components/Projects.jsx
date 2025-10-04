import React from 'react'
import projects from './Data/projects.json'

const Projects = () => {
  return (
    <>
    <div className="container projects my-3" id='projects'>

      <h1>PROJECTS</h1>
      <div className="row d-flex justify-content-center">
        
         {projects.map((pro) => (
          <div className="col my-4 col-sm-6 col-md-4 col-lg-3 mx-4 " key={pro.id}>
            <div className="card bg-dark text-light" style={{width: '18rem' ,border:'2px solid yellow',borderRadius:'10px',boxShadow:'5px 5px 10px 0px rgba(159, 223, 82, 0.5)'}}
            data-aos="flip-right"
            data-aos-duration="1000"
            >
              <div className="img d-flex justify-content-center p-3">
                 <img src={pro.imageSrc} className="card-img-top" alt={pro.title} style={{width:'250px',height:'200px',border:'2px solid yellow',borderRadius:'10px'}} />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{pro.title}</h5>
                <p className="card-text">{pro.description}</p>
                <a href={pro.demo} className="btn btn-primary mx-3" target="_blank" rel="noopener noreferrer">Demo</a>
                <a href={pro.source} className="btn btn-warning" target="_blank" rel="noopener noreferrer">Source</a>
              </div>
            </div>
          </div>
         ))}
      </div>

    </div>
    
    
    
    </>
  )
}

export default Projects