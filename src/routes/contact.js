import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../Components/Navbar'; 

class Contact extends Component {
    render() {
        return(
                <div className="App">
                 <header>
                  
                 <h1 className="App-title" style={{ color: "skyblue"}}>Eric Blancas</h1>
                   <a href="/"><img src="https://www.bnmetrics.com/images/bunny-icon.png" style={{width: 100, height: 100 }}/></a> 
                 </header>
                 <NavBar />
                 <center>
                 <div id="box">
                    Contact information is below
                 </div>
                 <div className="links">
                    <a href="https://github.com/ericblancas23"> <img className="clearImg"src={require('../Components/Octocat.png')} style={{height: 300, width: 300}}/></a>
                    <a href="https://www.linkedin.com/in/eric-blancas23/"><img className="clearImg"src={require('../Components/linkedin.png')} style={{height: 300, width: 300}}/></a>
                 </div>
                 </center>
                </div>
        );

    }
}

export default Contact;