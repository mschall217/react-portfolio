import React from 'react'
import { Link } from "react-router-dom"
import './style.css';

const Projects = () => {
    return(
        <div className="projects">
 
           <div className="projects-button">
                <h1>Check Out My Work!</h1>
                <p>Click the screenshots to be taken to the deployed APPs! Click the names to be taken to my Repos! </p>
                <div className="projectCont">
                   <a href="https://mschall217.github.io/employee-directory/" target="_blank" rel="noreferrer"> 
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/empDirect.png`}
                            alt="screenshot of project"/>
                    </a>
                    <a href="https://github.com/mschall217/employee-directory" target="_blank" rel="noreferrer">
                        <h1>Employee Directory</h1></a>
                    <p>A sortable employee directory created using React.js.</p>
                </div>
                <div className="projectCont">
                   <a href="https://mschall217.github.io/professional-portfolio/" target="_blank" rel="noreferrer"> 
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/profPortfolio.png`}
                            alt="screenshot of project"/>
                    </a>
                    <a href="https://github.com/mschall217/professional-portfolio" target="_blank" rel="noreferrer">
                        <h1>Professional Portfolio</h1></a>
                    <p>A Portfolio page built from HTML / CSS / vanilla JS</p>
                </div>
                <div className="projectCont">
                   <a href="https://mschall217.github.io/work-day-scheduler/" target="_blank" rel="noreferrer"> 
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/workdayScheduler.png`}
                            alt="screenshot of project"/>
                    </a>
                    <a href="https://github.com/mschall217/work-day-scheduler" target="_blank" rel="noreferrer">
                        <h1>Workday Scheduler</h1></a>
                    <p>A simple APP to plan out the work day. Add notes and they save on refresh until you unlock to edit / delete</p>
                </div>
                <div className="projectCont">
                   <a href="https://mschall217.github.io/weather-dashboard/" target="_blank" rel="noreferrer"> 
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/weatherDash.png`}
                            alt="screenshot of project"/>
                    </a>
                    <a href="https://github.com/mschall217/weather-dashboard" target="_blank" rel="noreferrer">
                        <h1>Weather Dashboard</h1></a>
                    <p>Using 3rd Party API this dashboard allows a user to find their current and 5 day forecast in a user friendly way</p>
                </div>
                <div className="projectCont">
                   <a href="https://mschall217.github.io/job-jump/" target="_blank" rel="noreferrer"> 
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/jobJump.png`}
                            alt="screenshot of project"/>
                    </a>
                    <a href="https://github.com/mschall217/job-jump" target="_blank" rel="noreferrer">
                        <h1>JobJump</h1></a>
                    <p>Leading a team of developers, this app was created to allow users to search for jobs in the midst of the pandemic while updating them on local covid data</p>
                </div>
                <div className="projectCont">
                   <a href="https://mschall217.github.io/FanPage/" target="_blank" rel="noreferrer"> 
                        <img src={`${process.env.PUBLIC_URL}/assets/imgs/fanPage.png`}
                            alt="screenshot of project"/>
                    </a>
                    <a href="https://github.com/mschall217/FanPage" target="_blank" rel="noreferrer">
                        <h1>My First Website</h1></a>
                    <p>It is always imporatnt to remember where you started. This was my first website I built and will always be near and dear to my heart. When I am frustrated it reminds me how far I have come and how much I have learned.</p>
                </div>
                <Link to="home">
                    <button>Home</button> 
                </Link>
                <Link to="about">
                    <button>About Me</button> 
                </Link> 
            </div>  
        </div>
    )
}

export default Projects;