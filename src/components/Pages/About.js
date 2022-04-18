import React from "react";
import Headshot from "../../images/Headshot.jpg";
import AboutMe from "../../images/About-Me-Crop.jpeg";
import Silly from "../../images/Silly-crop.jpeg";
import Climbing from "../../images/Climbing.jpg";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-photos">
        <img className="about-photo-1" src={Headshot} alt="Headshot"></img>
        <img className="about-photo-2" src={AboutMe} alt="About Me"></img>
      </div>
      <p className="about-description">
        My name is Steven Eiselt, a 29 year old QA/QC professional working on a
        career path change. I am currently enrolled in a Software Development
        and Coding Bootcamp orchestrated by Trilogy Education in conjunction
        with the University of Washington. My dream is to use the skills I learn
        from this program to work in as a game designer / developer in the video
        game industry. My hobbies include reading, hiking, rock climbing, video
        games and frisbee. I live in Bellingham Washington with my partner
        Ryleigh who is currently enrolled at Western Washington University to
        become a school councilor.
      </p>
      <div className="about-photos">
        <img className="about-photo-3" src={Silly} alt="Silly"></img>
        <img className="about-photo-4" src={Climbing} alt="Climbing"></img>
      </div>
    </div>
  );
}
