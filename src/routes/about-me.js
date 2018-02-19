import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../Components/Navbar';
import '../App.css';

class Aboutme extends Component {
  render() {
    return(
      <div className="App">
        <header>
          <img src="http://www.iconninja.com/files/597/234/361/earth-globe-planet-icon.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Eric Blancas</h1>
          <NavBar />
      </header>
        <div className="bigEntrance">
        <img src="https://pbs.twimg.com/profile_images/845313033572270081/7mXto357.jpg" id="pic"/>
        </div>
        <center>
        <div id="box">
          <p>Born and raised in San Diego, california. I always had an admiration for computers and technology, social media was
          just starting to become popular in the beginning of my generation. Xanga was my first exposure to DOM manipulation
          and rendering of colors, thus begun my journey to programming. I mainly did this on the side with the main fact that
          my goal after college was to become a doctor.
              Not knowing that I was proffcient in web Development while in college, it came
          to my discovery that studying pre-med was just not for me. The sudden thought of becoming a programmer did not come to my head
          until I built my first gaming computer. Building my first ever pc exposed me to much more advanced concepts of computer science.
          I studied game Development, mobiled application Development with swift, and web Development has been my primary focus, even at
          a younger age without even knowing. So I continue my path to software engineering and problem solving as I progress through and through
          as the years go on. 
           </p>
        </div>
        </center>
      </div>
    );
  }
}

export default Aboutme;
