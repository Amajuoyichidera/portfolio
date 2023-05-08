import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <AiOutlineHome className="page-icon" />
      <FaHome />
    </div>
  );
}

export default Home;
