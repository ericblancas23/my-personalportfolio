import React, { Component } from 'react';
import logo from './logo.svg';
import './pic.jpg';
import { Link, Router } from 'react-router-dom';
import { NavBar } from './Components/Navbar';
import { Parallax } from 'react-scroll-parallax';

import './App.css';





class App extends Component {

  showSettings (event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
      <Parallax>
       <header>
          <img src="http://www.iconninja.com/files/597/234/361/earth-globe-planet-icon.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Eric Blancas</h1>

      </header>
        <NavBar />
      </Parallax>      
        <div className="bigEntrance">
          <img src={require('./pic.jpg')} id="pic" style={{ float: 'left'}}/>
          <div id="my-paragraph">
          <p>Welcome! Im Eric Blancas and this is my personal Portfolio. To furthur explain myself
          I have been a part of the Development scene for about 2-3 years now and have been passionate about
          Web Development and Software Development at a very young age. You can head to my personal projects
          page, which include some of my projects that I have developed during my 6 months at lambda school.
          I also have a personal blog page that I have written for about a year now. I am also a contributing writer
          for the lamba school medium blog page. Feel free to look around and if you wish to furthur contact me, my details
          will be in the contact page.</p>
          </div>
        </div>
        {/* <div className="more-about">
          <p id="paragraph2">My first encounter of becoming a software developer all started with my senior project 
          of high school. My project involved me attending my very first web developer bootcamp for the weekend</p>
          <img src="https://www.drupal.org/files/druplicon-small.png" style={{width: 200, height: 200, float: 'right'}} />
        </div> */}
      </div>
    );
  }
}

export default App;
