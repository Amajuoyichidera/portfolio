import React from "react";
import myImg from '../assets/myimg.jpg';
import html from '../assets/html.png';
import css from '../assets/css.png';
import java from '../assets/js.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import boot from '../assets/boot.jpg';
import tail from '../assets/tail.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import code from '../assets/code.png';
import word from '../assets/word.png';
import shop from '../assets/shop.png';
import node from '../assets/node.png';
import gpt from '../assets/gpt.png';
import hoobank from '../assets/hoobank.png';
import easy from '../assets/easy.png';
import blogr from '../assets/blogr.png';
import fiber from '../assets/fiber.png';
import book from '../assets/book.png';
import tokwehu from '../assets/tokwehu.png';
import paga from '../assets/paga.png';
import paypal from '../assets/paypal.png';
import hiaem from '../assets/hiaem.png';
import sol from '../assets/sol.png';
import homecare from '../assets/homecare.png';
import flex from '../assets/flex.png';
import hand from '../assets/hand.jpg'
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



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
        <h1>Hi <img className="hand" src={hand} alt={hand} />, <br />  My name is <span>David Amajuoyi</span> <br /> i'm a Frontend / Mobile Developer </h1>
      </section>

      <section>
         <img className="myimg" src={myImg} alt={myImg} />
      </section>

    </section>


  {/* stack section */}

    <section>

    <section className="my">
      <h1>My Tech Stack</h1>
      <p>Technologies i work with</p>
    </section>

    <figure  data-aos="fade-up" data-aos-duration="2000">
      <img src={html} alt={html} />
      <img src={css} alt={css} />
      <img src={java} alt={java} />
      <img src={react} alt={react} />
      <img src={redux} alt={redux} />
    </figure>

    <figure  data-aos="fade-up" data-aos-duration="2000">
      <img src={boot} alt={boot} />
      <img src={tail} alt={tail} />
      <img src={git} alt={git} />
      <img src={github} alt={github} />
      <img src={node} alt={node} />
    </figure>

    <figure  data-aos="fade-up" data-aos-duration="2000">
      <img src={code} alt={code} />
      <img src={word} alt={word} />
      <img src={shop} alt={shop} />
    </figure>

    </section>


    {/* projects */}

    <section>

      <section className="pro">
        <h1>Projects</h1>
        <p>Things i've built so far</p>
      </section>

    {/* slide one */}

      <section className="one2"  data-aos="zoom-in" data-aos-duration="2000">

      <div className="gpt">
        <img src={gpt} alt={gpt} />
        <section className="project">
          <h2>Projects name</h2>
          <p>this is a sample</p>
          <p> <span>Tech Stack:</span> Html, css, javascript, react </p>
        </section>

       <section className="live">
        <section className="link">
         <ion-icon name="link-outline"></ion-icon>
         <a href="https://gptweb3.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a>
         {/* <p>Live Preview</p> */}
        </section>

        <section className="link">
        <ion-icon name="logo-github" ></ion-icon>
        <p>View Code</p>
        </section>
       </section>
        
      </div>

      <div className="gpt">
       <img src={hoobank} alt={hoobank} />
       <section className="project">
        <h2>Projects name</h2>
        <p>this is a sample</p>
        <p> <span>Tech Stack:</span> Html, css, javascript, react </p>
       </section>

       <section className="live">
        <section className="link">
         <ion-icon name="link-outline"></ion-icon>
         <a href="https://hookbank1.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a>
        </section>

        <section className="link">
        <ion-icon name="logo-github"></ion-icon>
        <p>View Code</p>
        </section>
       </section>

      </div>

      <div className="gpt">
       <img src={tokwehu} alt={tokwehu} />
       <section className="project">
        <h2>Projects name</h2>
        <p>this is a sample</p>
        <p> <span>Tech Stack:</span> Html, css, javascript, react </p>
       </section>

       <section className="live">
        <section className="link">
         <ion-icon name="link-outline"></ion-icon>
         <a href="https://tokwehu.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a>
        </section>

        <section className="link">
        <ion-icon name="logo-github"></ion-icon>
        <p>View Code</p>
        </section>
       </section>

      </div>

      </section>

      {/* slide two */}


      <section className="one"  data-aos="zoom-in" data-aos-duration="2000">

<div className="gpt">
 <img src={flex} alt={flex} />
 <section className="project">
  <h2>Projects name</h2>
  <p>this is a sample</p>
  <p> <span>Tech Stack:</span> Html, css, javascript, react </p>
 </section>

 <section className="live">
  <section className="link">
   <ion-icon name="link-outline"></ion-icon>
   <a href="https://flexit.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a>
  </section>

  <section className="link">
  <ion-icon name="logo-github"></ion-icon>
  <p>View Code</p>
  </section>
 </section>

</div>

<div className="gpt">
 <img src={homecare} alt={homecare} />
 <section className="project">
  <h2>Projects name</h2>
  <p>this is a sample</p>
  <p> <span>Tech Stack:</span> Html, css, javascript, react </p>
 </section>

 <section className="live">
  <section className="link">
   <ion-icon name="link-outline"></ion-icon>
   <a href="https://optimumhealthcare.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a>
  </section>

  <section className="link">
  <ion-icon name="logo-github"></ion-icon>
  <p>View Code</p>
  </section>
 </section>

</div>

<div className="gpt">
 <img src={sol} alt={sol} />
 <section className="project">
  <h2>Projects name</h2>
  <p>this is a sample</p>
  <p> <span>Tech Stack:</span> Html, css, javascript, react </p>
 </section>

 <section className="live">
  <section className="link">
   <ion-icon name="link-outline"></ion-icon>
   <a href="https://solemusic.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a>
  </section>

  <section className="link">
  <ion-icon name="logo-github"></ion-icon>
  <p>View Code</p>
  </section>
 </section>

</div>

</section>

 
   {/* slide three */}

      <section className="one"  data-aos="zoom-in" data-aos-duration="2000">

      <div className="gpt">
       <img src={paga} alt={paga} />
       <section className="project">
        <h2>Projects name</h2>
        <p>this is a sample</p>
        <p> <span>Tech Stack:</span> Html, css, javascript, react </p>
       </section>

       <section className="live">
        <section className="link">
         <ion-icon name="link-outline"></ion-icon>
         <a href="https://pagaclone.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a>
        </section>

        <section className="link">
        <ion-icon name="logo-github"></ion-icon>
        <p>View Code</p>
        </section>
       </section>

      </div>

      <div className="gpt">
       <img src={paypal} alt={paypal} />
       <section className="project">
        <h2>Projects name</h2>
        <p>this is a sample</p>
        <p> <span>Tech Stack:</span> Html, css, javascript, react </p>
       </section>

       <section className="live">
        <section className="link">
         <ion-icon name="link-outline"></ion-icon>
         <a href="https://mypaypalcloned.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a>
        </section>

        <section className="link">
        <ion-icon name="logo-github"></ion-icon>
        <p>View Code</p>
        </section>
       </section>

      </div>

      <div className="gpt">
       <img src={hiaem} alt={hiaem} />
       <section className="project">
        <h2>Projects name</h2>
        <p>this is a sample</p>
        <p> <span>Tech Stack:</span> Html, css, javascript, react </p>
       </section>

       <section className="live">
        <section className="link">
         <ion-icon name="link-outline"></ion-icon>
         <a href="https://silly-dragon-ebb271.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a>
        </section>

        <section className="link">
        <ion-icon name="logo-github"></ion-icon>
        <p>View Code</p>
        </section>
       </section>

      </div>

      </section>



   {/* slide four */}

      <section className="one1"  data-aos="zoom-in" data-aos-duration="2000">

      <div className="gpt">
       <img src={easy} alt={easy} />
       <section className="project">
        <h2>Projects name</h2>
        <p>this is a sample</p>
        <p> <span>Tech Stack:</span> Html, css, javascript, react </p>
       </section>

       <section className="live">
        <section className="link">
         <ion-icon name="link-outline"></ion-icon>
         <a href="https://melodic-fudge-da2c07.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a>
        </section>

        <section className="link">
        <ion-icon name="logo-github"></ion-icon>
        <p>View Code</p>
        </section>
       </section>

      </div>

      <div className="gpt">
       <img src={blogr} alt={blogr} />
       <section className="project">
        <h2>Projects name</h2>
        <p>this is a sample</p>
        <p> <span>Tech Stack:</span> Html, css, javascript, react </p>
       </section>

       <section className="live">
        <section className="link">
         <ion-icon name="link-outline"></ion-icon>
         <a href="https://blogrwebpage.netlify.app/#" target="_blank" rel="noopener noreferrer">Live Preview</a>
        </section>

        <section className="link">
        <ion-icon name="logo-github"></ion-icon>
        <p>View Code</p>
        </section>
       </section>

      </div>

      

      </section>


      {/* slide five */}

      <section className="one1"  data-aos="zoom-in" data-aos-duration="2000">

      <div className="gpt">
       <img src={fiber} alt={fiber} />
       <section className="project">
        <h2>Projects name</h2>
        <p>this is a sample</p>
        <p> <span>Tech Stack:</span> Html, css, javascript, react </p>
       </section>

       <section className="live">
        <section className="link">
         <ion-icon name="link-outline"></ion-icon>
         <a href="https://amajuoyichidera.github.io/Fiber-web-page/" target="_blank" rel="noopener noreferrer">Live Preview</a>
        </section>

        <section className="link">
        <ion-icon name="logo-github"></ion-icon>
        <p>View Code</p>
        </section>
       </section>

      </div>


      <div className="gpt">
       <img src={book} alt={book} />
       <section className="project">
        <h2>Projects name</h2>
        <p>this is a sample</p>
        <p> <span>Tech Stack:</span> Html, css, javascript, react </p>
       </section>

       <section className="live">
        <section className="link">
         <ion-icon name="link-outline"></ion-icon>
         <a href="https://gorgeous-cobbler-13ee15.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a>
        </section>

        <section className="link">
        <ion-icon name="logo-github"></ion-icon>
        <p>View Code</p>
        </section>
       </section>

      </div>

      </section>


    </section>


      
    </section>
  );
}

export default Home;
