import React from 'react'
import { Link } from "react-router-dom"
import './style.css';

const About = () => {
        return(
            <div className="about">
                <div className="about-title">
                    <h1>
                        All About Me!
                    </h1>
                    <div>
                            <p>After studying oriented programming languages in college I turned my focus onto people and communication. I have rediscovered my love of programming and went back to school to fuel my passion for web design. I am a full stack developer with experience in HTML, CSS, Javascript, third party API’s and more! </p>
                            <p>I have been obsessed with everything technology since high school when I built my first computer in a computer science class. I have now found a way to turn that hobby into a career through my Full-Stack Development certificate. </p>
                            <p>In my previous careers I developed expert level customer service skills. Some of my previous titles include flight attendant, supervisor, and account manager. I have a passion for working with and helping people. I thrive in a team environment where we are able to discuss and expand ideas. </p>
                            <p>I am currently seeking a role with a company where I can learn, grow, interact, and master my skills. I aspire to obtain a job as a Project Manager combining my new bootcamp skill set and expansive management background together</p>
                        <div>
                            <Link to="home">
                            <button>Home</button> 
                            </Link>
                            <Link to="projects">
                            <button>See My Work!</button> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default About;