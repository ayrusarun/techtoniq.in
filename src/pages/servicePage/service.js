
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./service.css";

const Service = () => {

  const [isFlipped, setIsFlipped] = useState({
    webDesign: false,
    mobileApp: false,
    ecommerce: false,
  });

  const handleMouseEnter = (card) => {
    setIsFlipped((prevState) => ({
      ...prevState,
      [card]: true,
    }));
  };

  const handleMouseLeave = (card) => {
    setIsFlipped((prevState) => ({
      ...prevState,
      [card]: false,
    }));
  };

  return (
    <div id='servicePage'>
      <div>
        <small>#service</small>
        <h1>What We Do ||</h1>
      </div>
      <div className="cardcontainer">
        <div className="card1">
          <ReactCardFlip
            flipDirection="horizontal"
            isFlipped={isFlipped.webDesign}
          >
            <div
              className="card card-front"
              id="webDesign"
              onMouseEnter={() => handleMouseEnter("webDesign")}
              onMouseLeave={() => handleMouseLeave("webDesign")}
            >
              <p className="cardTxt">Web Design</p>
            </div>
            <div
              className="card card-back"
              onMouseEnter={() => handleMouseEnter("webDesign")}
              onMouseLeave={() => handleMouseLeave("webDesign")}
            >
              <p className="cardTxt">Web Design</p>
              <p className="cardbackTxt">
                Websites crafted by Techtoniq Web Design Company harness
                cutting-edge technology to elevate your online presence,
                delivering sleek designs that captivate visitors and enhance
                user experience. With expertly optimized websites, businesses
                enjoy increased visibility, driving organic traffic and
                maximizing conversions effortlessly. Trust Techtoniq for
                innovative web solutions that propel your brand forward in the
                digital landscape.
                <br /><br /><br />
                <a href="https://www.google.com/search?q=advantage+of+website+for+business&sca_esv=ceb16510f626229b&sca_upv=1&ei=UvfrZaC6Ka7YseMPyZGJyAo&oq=advantage+of+webs&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIhFhZHZhbnRhZ2Ugb2Ygd2VicyoCCAIyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSObTAVAAWL6oAXABeACQAQCYAfwBoAGBHaoBBjAuMTcuNbgBA8gBAPgBAZgCF6ACzB2oAhTCAgsQABiABBixAxiDAcICDhAAGIAEGIoFGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEY0QPCAg4QLhiABBiKBRixAxiDAcICFBAuGIAEGIoFGJECGLEDGMcBGNEDwgILEC4YgAQYigUYkQLCAggQABiABBixA8ICChAuGIAEGIoFGEPCAiMQLhiABBiKBRiRAhixAxjHARjRAxiXBRjcBBjeBBjgBNgBAcICDhAAGIAEGIoFGJECGLEDwgILEAAYgAQYigUYkQLCAgoQABiABBiKBRhDwgILEC4YgAQYsQMYgwHCAg0QABiABBiKBRhDGLEDwgIQEAAYgAQYigUYQxixAxiDAcICFhAuGIAEGIoFGEMYiwMY8AMYqAMYmAPCAgsQABiABBiKBRixA8ICChAAGIAEGAoYsQPCAgcQABiABBgKwgIQEAAYgAQYigUYChixAxiDAcICExAAGIAEGIoFGEMY6gIYtALYAQLCAhYQABgDGI8BGOUCGOoCGLQCGIwD2AEDwgIWEC4YAxiPARjlAhjqAhi0AhiMA9gBA8ICCBAuGIAEGLEDwgIFEC4YgATCAiAQLhiABBixAxiDARjHARjRAxiXBRjcBBjeBBjgBNgBAcICGhAuGIAEGIoFGJECGLEDGIMBGMcBGK8BGI4FwgIOEC4YgAQYsQMYxwEY0QPCAikQLhiABBiKBRiRAhixAxiDARjHARivARiOBRiXBRjcBBjeBBjgBNgBAcICChAAGIAEGEYY_wHCAgsQLhiABBjHARivAcICFhAAGIAEGEYY_wEYlwUYjAUY3QTYAQSYAwS6BgYIARABGBS6BgQIAhgHugYGCAMQARgKugYGCAQQARgTkgcGMS4xNy41oAfNswE&sclient=gws-wiz-serp#ip=1" target="_blank"  rel="noreferrer">Read More</a>
              </p>
            </div>
          </ReactCardFlip>
        </div>
        <div className="card2">
          <ReactCardFlip
            flipDirection="horizontal"
            isFlipped={isFlipped.mobileApp}
          >
            <div
              className="card card-front"
              id="mobileApp"
              onMouseEnter={() => handleMouseEnter("mobileApp")}
              onMouseLeave={() => handleMouseLeave("mobileApp")}
            >
              <p className="cardTxt">Mobile Apps</p>
            </div>
            <div
              className="card card-back"
              onMouseEnter={() => handleMouseEnter("mobileApp")}
              onMouseLeave={() => handleMouseLeave("mobileApp")}
            >
              <p className="cardTxt">Mobile Apps</p>
              <p className="cardbackTxt">
                Techtoniq's mobile apps redefine convenience, seamlessly
                integrating cutting-edge technology to deliver unparalleled
                user experiences. With meticulous attention to detail, our
                expert developers craft apps that elevate functionality and
                engagement, empowering businesses to stay agile and competitive
                in the fast-paced digital realm. Partner with Techtoniq for
                innovative mobile solutions that resonate with your audience
                and drive sustainable growth.

                <br /><br /><br />
                <a href="https://www.google.com/search?q=advantage+of+mobile+app+for+business&sca_esv=ceb16510f626229b&sca_upv=1&ei=1frrZYCiCcaRseMPx5ir0Ag&oq=advantage+of+mobile+for+business&gs_lp=Egxnd3Mtd2l6LXNlcnAiIGFkdmFudGFnZSBvZiBtb2JpbGUgZm9yIGJ1c2luZXNzKgIIATIIECEYoAEYwwQyCBAhGKABGMMEMggQIRigARjDBEjeQ1CnH1j-LXACeAGQAQCYAYwCoAH1B6oBBTAuNS4xuAEDyAEA-AEBmAIGoALRBMICChAAGEcY1gQYsAPCAggQABgHGB4YD8ICCBAAGAgYBxgewgILEAAYgAQYigUYhgPCAggQABiABBiiBMICChAhGAoYoAEYwwSYAwCIBgGQBgiSBwMyLjSgB7wo&sclient=gws-wiz-serp" target="_blank"  rel="noreferrer">Read More</a>
              </p>
            </div>
          </ReactCardFlip>
        </div>
        <div className="card3">
          <ReactCardFlip
            flipDirection="horizontal"
            isFlipped={isFlipped.ecommerce}
          >
            <div
              className="card card-front"
              id="ecommerce"
              onMouseEnter={() => handleMouseEnter("ecommerce")}
              onMouseLeave={() => handleMouseLeave("ecommerce")}
            >
              <p className="cardTxt">e-Commerce</p>
            </div>
            <div
              className="card card-back"
              onMouseEnter={() => handleMouseEnter("ecommerce")}
              onMouseLeave={() => handleMouseLeave("ecommerce")}
            >
              <p className="cardTxt">e-Commerce</p>
              <p className="cardbackTxt">
                Revolutionize your online presence with cutting-edge e-commerce
                solutions from Techtoniq Web Design Company. Seamlessly
                integrate our tailored e-commerce platforms into your website,
                empowering customers to shop conveniently from anywhere,
                anytime. With Techtoniq, unlock new markets, boost revenue, and
                streamline operations for unparalleled success in the digital
                marketplace.

                <br /><br /><br />
                <a href="https://www.google.com/search?q=advantage+of+ecommerce+for+business&sca_esv=ceb16510f626229b&sca_upv=1&ei=BPvrZcCBLZDQseMPqrubyAk&oq=advantage+of+e+for+business&gs_lp=Egxnd3Mtd2l6LXNlcnAiG2FkdmFudGFnZSBvZiBlIGZvciBidXNpbmVzcyoCCAAyBhAAGAcYHjIIEAAYCBgHGB4yCBAAGAgYBxgeMggQABgIGAcYHjIIEAAYCBgHGB4yCBAAGAgYBxgeMgsQABiABBiKBRiGA0iXSVDQLFjQLHACeAGQAQCYAdQBoAHUAaoBAzItMbgBAcgBAPgBAZgCA6AC3QHCAgoQABhHGNYEGLADmAMAiAYBkAYIkgcFMi4wLjGgB6UJ&sclient=gws-wiz-serp" target="_blank"  rel="noreferrer">Read More</a>
              </p>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </div>
  );
};

export default Service;
