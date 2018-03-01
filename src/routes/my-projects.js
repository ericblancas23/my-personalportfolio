import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../Components/Navbar';



class Projects extends Component {

    

    render() {
        return(
                <div className="App">
                  <header>
                    <h1 className="App-title" style={{ color: "skyblue"}}>Eric Blancas</h1>
                  </header>
                  <NavBar />
                  <div className="bigEntrance">
                  </div>
                  <center>
                  <div className="project-display">
                    <h3>Cliphy Project</h3>
                    <h4>https://movingimages.herokuapp.com/</h4>
                      <img className="clearImg" src={require('../Components/cliphy.png')} className="project-image"/>
                  <p>
                          This project is a clone of Cliphy using Maonsry Layout. Users will be able to 
                          upload their gif for users to display towards the website. Technologies that was used are
                          React, Auth0 for authentication and Cloudinary for file uploading.
                </p>
                </div>
                <div className="project-display">
                  <h3>Lambda Showcase </h3>
                  <h4>https://lambdashowcase.herokuapp.com/</h4>
                  
                    <img className="clearImg" src={require('../Components/lambdashowcase.png')} className="project-image"/>
                    <p> This was my capstone project for Lambda School. Graduating out of the 2nd cohort 
                        of the program, we wanted to create a tool that is both beneficial and luxurious 
                        towards the program, so we decided to make a website that resembled dribbble.com .
                        The purpose of the web application is to showcase some of the students work towards the
                        general public. Technologies used for this project is the full Mern Stack. MongoDB,
                        Express, React, and Node. This was a full stack web application dedicated to the program.
                    </p>
                </div>
                <div className="project-display">
                    <h3>AirBnB Clone</h3>
                    <h4>https://airbnbproject.herokuapp.com/</h4>
                      <img className="clearImg" src="https://cdn.scotch.io/208/rbp8gIqTEWrW5vEKouQW_Screen%20Shot%202018-01-05%20at%207.58.58%20PM.png" className="project-image"/>
                  <p>
                    This project was demonstrate my skill set as a Front-end Developer. Using Redux along with
                    the Appbase.io tools, I was able to immitate the design and the architecture of the Airbnb 
                    website. 
                  </p>
                </div>
                <div className="project-display">
                    <h3>Taxi-Application</h3>
                    <h4>https://github.com/ericblancas23/taxi-app</h4>
                      <img className="clearImg" src="https://cdn-images-1.medium.com/max/369/1*bRuoHj7wZkwqNFcA7wJqPQ.png"/>
                  <p>
                  Lambda School Personal Project to demonstrate skills in full stack development and also in React/React Native 
                  </p>
                </div>
                   
                  </center>
                </div>
        );

    }
}

export default Projects;