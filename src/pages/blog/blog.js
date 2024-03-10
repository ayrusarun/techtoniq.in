import React from 'react';
import "./blog.css";
import kt from "../../assets/kt.png"
import FAQ from '../../components/faq/faq';
const Blog = () => {
  return (
   
     <>
      <div id="blogPage">
        <div>
          <small>#Blog</small>
          <h1>Latest Projects ||</h1>
        </div >
        
       <div className='project_container'>

       <div className='projects'>
        <img src={kt} alt="projects" />
        <a href="https://krystaltouch.in/" target='_blank'  rel="noreferrer">krystaltouch.in</a>
        <p>"KrystalTouch offers exquisite jewelry pieces that blend elegance with timeless craftsmanship. From dazzling gemstones to intricate designs, discover your perfect adornment at KrystalTouch."</p>
        <a href="https://krystaltouch.in/" target='_blank'  rel="noreferrer" className='viewBtn'>view</a>
        </div>

        <div className='projects'>
        <img src={kt} alt="projectcs" />
        <a href="https://krystaltouch.in/" target='_blank'  rel="noreferrer">krystaltouch.in</a>
        <p>"KrystalTouch offers exquisite jewelry pieces that blend elegance with timeless craftsmanship. From dazzling gemstones to intricate designs, discover your perfect adornment at KrystalTouch."</p>
        <a href="https://krystaltouch.in/" target='_blank'  rel="noreferrer" className='viewBtn'>view</a>
        </div>

       

      </div>
    </div>
    <FAQ/>
     </>
   
  );
};

export default Blog;
