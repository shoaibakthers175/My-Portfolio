
import pdf from '../pdf/shoaib_resume_2025[1].pdf'
import hero from './Data/hero.json'
import heros from '/asset/hero/shoaibprofile.jpg'
import Typed from 'typed.js'
import React,{useEffect,useRef} from 'react'



const Home = () => {
  const typedRef=useRef(null);
  useEffect(()=>{
    const options={
      strings:[
        "Welcome to My Profile",
        "My Name is Shoaib Akther",
        "I am Qa Automation Engineer",
        "I love Coding and Designing"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
    const typed=new Typed(typedRef.current,options);
    return()=>{
      typed.destroy();
    };
    },[]);
  return (
    <>
    <div className="container home" id='home'>

       <div className="left"data-aos="fade-up-right" 
      data-aos-duration="1000">
        <h1 ref={typedRef}> </h1>
        <a href={pdf} download="resume.pdf" className="btn btn-outline-warning my-4">Download Resume</a>
       </div>
       <div className="right">
        <div className="img" data-aos="fade-up-left" 
      data-aos-duration="1000">
          <img src={heros} alt="hero" />
        </div>

       </div>


    </div>
    
    
    
    
    
    
    </>
  )
}

export default Home