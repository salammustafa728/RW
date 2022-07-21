import React from "react";
import { Button } from "../landing/Button";
import '../../styles/HeroSection.scss';
import '../../styles/App.scss';


function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/public/Videos/production.mp4" autoPlay loop muted></video>
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch trailer <i className="far fa-play-circle"/>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
