import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../Components/Navbar';


class Projects extends Component {

    

    render() {
        return(
                <div className="App">
                  <header>
                    <img src="http://www.iconninja.com/files/597/234/361/earth-globe-planet-icon.png" className="App-logo" alt="logo" />
                    <h1 className="App-title">Eric Blancas</h1>
                    <NavBar />
                  </header>
                  <div className="bigEntrance">
                  </div>
                  <center>
                  <div id="box">
                    <p>
                        These are the current projects I have worked on both individually and also with capstone group
                    involving an agile development process during the making. 
                     </p>
                  </div>
                  <div className="project-display">
                    <h3>Cliphy Project</h3>
                    <h4>https://movingimages.herokuapp.com/</h4>
                      <img src={require('../Components/cliphy.png')} className="project-image"/>
                  <p>
                          This project is a clone of Cliphy using Maonsry Layout. Users will be able to 
                          upload their gif for users to display towards the website. Technologies that was used are
                          React, Auth0 for authentication and Cloudinary for file uploading.
                </p>
                </div>
                <div className="project-display">
                  <h3>Lambda Showcase </h3>
                  <h4>https://lambdashowcase.herokuapp.com/</h4>
                    <img src={require('../Components/projectdisplay.png')} className="project-image"/>
                    <img src={require('../Components/lambdashowcase.png')} className="project-image"/>
                    <p> This was my capstone project for Lambda School. Graduating out of the 2nd cohort 
                        of the program, we wanted to create a tool that is both beneficial and luxurious 
                        towards the program, so we decided to make a website that resembled dribbble.com .
                        The purpose of the web application is to showcase some of the students work towards the
                        general public. Technologies used for this project is the full Mern Stack. MongoDB,
                        Express, React, and Node. This was a full stack web application dedicated to the program.
                    </p>
                </div>
                  </center>
                </div>
        );

    }
}

export default Projects;