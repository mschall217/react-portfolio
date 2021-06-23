import React from 'react'
import { Link } from "react-router-dom"
import './style.css';

const Home = () => {
    return(
        <div className="home">
            <div className="home-title">
                <h1>
                    <p>Full Stack Developer</p>
                </h1>
                <div className="profilePic">
                    <img src={`${process.env.PUBLIC_URL}/me.jpg`}
                    alt="Morgan Headshot"
                    />
                
                <div>
                <Link to="about">
                   <button>About Me</button> 
                </Link>
                <Link to="projects">
                   <button>See My Work!</button> 
                </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;