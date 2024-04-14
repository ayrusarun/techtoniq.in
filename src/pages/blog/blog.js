import React from 'react';
import "./blog.css";
import kt from "../../assets/kt.png"
import mk from "../../assets/Mk_logo.svg"
import FAQ from '../../components/faq/faq';
const Blog = () => {
  return (
   
     <>
      <div id="blogPage">
        <div>
          <h1>Our collaborators </h1>
        </div >
        
       <div className='project_container'>

       <div><img src={kt} alt="krystaltouch" /></div>
       <div><img src={mk} alt="krystaltouch" /></div>

      </div>
    </div>
    <FAQ/>
     </>
   
  );
};

export default Blog;
