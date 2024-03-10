import Navbar from "./components/navbar/navbar";
import "./App.css";
import About from "./pages/aboutPage/about";
import Service from "./pages/servicePage/service";
import Blog from "./pages/blog/blog";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";
import { useTypewriter } from "react-simple-typewriter";
import ws_icon from "./assets/ws_icon.png";

export default function Home() {
  const [typewriter] = useTypewriter({
    words: ["techtoniq.in"],

    typeSpeed: 250,
    delaySpeed: 5,
  });

  

  return (
    <>
      <Navbar />
      <div id="homePage">
        <div className="main_area">
          <p className="brandName">{typewriter}</p>
          <p className="tagLine">
            <span>"</span>Transforming Ideas into Stunning Digital Realities
            <span>"</span>
          </p>
          <p className="subtag">
            Let our expertise transform your vision into captivating online
            experiences, <br />
            all at competitive prices tailored to fit your budget.
          </p>
          <a href="#contactPage" className="lets_Go_Btn">
            Let's Go
          </a>

          <div className="BGimg1"></div>
          <div className="BGimg2"></div>
          <div className="BGimg3"></div>

          <a href="http://wa.me/+918940882711" target="_blank" rel="noreferrer">
            <img src={ws_icon} alt="whatsapp_icon" className="whatsapp_icon" />
          </a>
        </div>

        <About />
        <br />
        <br />
        <Service />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
