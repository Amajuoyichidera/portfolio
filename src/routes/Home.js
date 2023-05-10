import React from "react";
import myImg from '../assets/myimg.jpg';
import hand from '../assets/hand.jpg'
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Stack from "./Stack";
import Project from "./Project";



function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false
    });
  }, []);

  return (
    <section>

    <section className="intro" data-aos="fade-up" data-aos-duration="2000">
      <section className="hi">
        <h1 className="animated-text ">Hi <img className="hand" src={hand} alt={hand} />, <br />  My name is <span>David Amajuoyi</span> <br /> i'm a Frontend / Mobile Developer </h1>
      </section>

      <section>
         <img className="myimg" src={myImg} alt={myImg} />
      </section>

    </section>


  {/* stack section */}

    
    <Stack />


    {/* projects */}

    
    <Project />


      
    </section>
  );
}

export default Home;
