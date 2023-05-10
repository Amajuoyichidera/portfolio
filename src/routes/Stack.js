import React from 'react'
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
import './stack.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Stack() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: false
        });
      }, []);

  return (
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
  );
}

export default Stack;