import React from 'react';
import { Collapse } from 'antd';
import "./faq.css";


const FAQ = () => {
  const { Panel } = Collapse;

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className='faq'>
      <h1>Frequently Asked Questions</h1>
      <br />
      <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="What services do you offer?" key="1">
        <p>We offer a wide range of services including website design, web development, mobile app development, e-commerce solutions, digital marketing, and more. Our goal is to provide comprehensive solutions to meet all your digital needs.</p>
      </Panel>
      <Panel header="How long does it take to build a website?" key="2">
        <p>The timeline for website development depends on various factors such as the complexity of the project, features required, and client feedback cycles. Typically, we aim to deliver websites within 4-8 weeks from the start of the project.</p>
      </Panel>
      <Panel header=" Can you redesign an existing website?" key="3">
        <p>Yes, we specialize in website redesign projects. Whether you need a modern facelift or improved functionality, our team can work with you to revamp your existing website and enhance its performance and user experience.</p>
      </Panel>
      <Panel header="  What platforms do you use for website development?" key="4">
        <p> We are proficient in various platforms and technologies including WordPress, Shopify, Magento, React, Angular, and more. Our developers leverage the latest tools and frameworks to create custom solutions tailored to your specific requirements.</p>
      </Panel>
      <Panel header=" Do you provide hosting and maintenance services?" key="5">
        <p>Yes, we offer hosting and maintenance packages to ensure your website remains secure, up-to-date, and performing optimally. Our hosting services include regular backups, security monitoring, software updates, and technical support.</p>
      </Panel>
      <Panel header=" Can you help with search engine optimization (SEO)?" key="6">
        <p>Yes, we specialize in website redesign projects. Whether you need a modern facelift or improved functionality, our team can work with you to revamp your existing website and enhance its performance and user experience.</p>
      </Panel>
    </Collapse>
    </div>
  );
}

export default FAQ;
