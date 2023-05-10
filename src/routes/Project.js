import React from "react";
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
import './project.css'

function Project() {
  return (
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
        <h2>Gpt3</h2>
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
      <h2>Hoobank</h2>
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
      <h2>Tokwehu</h2>
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
<h2>FlexIT</h2>
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
<h2>Optimum Home Health Care</h2>
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
<h2>Solmusic</h2>
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
      <h2>Paga</h2>
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
      <h2>Paypal</h2>
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
      <h2>HIAEM</h2>
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
      <h2>Easy bank</h2>
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
      <h2>Blogr</h2>
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
      <h2>Fiber</h2>
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
      <h2>Bookmark</h2>
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
  );
}

export default Project;