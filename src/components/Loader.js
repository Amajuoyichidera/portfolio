import React from 'react';
import load from '../assets/load.gif';
import './Loader.css'

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={load} alt="Loading..." />
    </div>
  );
};

export default Preloader;