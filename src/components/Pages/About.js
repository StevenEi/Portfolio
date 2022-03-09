import React from 'react';
import { Carousel } from "react-bootstrap"
import photo1 from "../../images/testPic.jpg"
import photo2 from "../../images/testPic2.jpg"
import photo3 from "../../images/testPic3.jpg"

export default function About() {
  return (
    <div>
      <Carousel fade={true} className="carousel" controls={false}>
        <Carousel.Item interval={2000}>
        <img
            className="d-block w-100"
            src={photo1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={photo2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={photo3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      My name is Steven Eiselt, a 28 year old QA/QC professional working on a career path change. I am
        currently enrolled in a Software Development and Coding Bootcamp orchestrated by Trilogy Education in conjunction with the University of Washington. 
        My dream is to use the skills I learn from this program to work in as a game designer / developer in the video game industry. My hobbies include reading, hiking, rock
        climbing, video games and frisbee. I live in Bellingham Washington with my
        girlfriend Ryleigh who is currently enrolled at Western Washington University to become a school councilor.
    </div>
  );
}
