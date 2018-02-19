import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../Components/Navbar'; 

class Contact extends Component {
    render() {
        return(
                <div className="App">
                 <header>
                  <img src="http://www.iconninja.com/files/597/234/361/earth-globe-planet-icon.png" className="App-logo" alt="logo" />
                   <h1 className="App-title">Eric Blancas</h1>
                     <NavBar />
                 </header>
                 <center>
                 <div id="box">
                    Contact information is below
                 </div>
                 <div className="links">
                    <a href="https://github.com/ericblancas23"> <img src={require('../Components/Octocat.png')} style={{height: 300, width: 300}}/></a>
                    <a href="https://www.linkedin.com/in/eric-blancas23/"><img src={require('../Components/linkedin.png')} style={{height: 300, width: 300}}/></a>
                 </div>
                 </center>
                </div>
        );

    }
}

export default Contact;