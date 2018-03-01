import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../Components/Navbar';
import '../App.css';

class Aboutme extends Component {
  render() {
    return(
      <div className="App">
        <header>
          <h1 className="App-title" style={{ color: "skyblue"}}>Eric Blancas</h1>
      </header>
      <NavBar />
        <div className="bigEntrance">
        <img src="https://pbs.twimg.com/profile_images/845313033572270081/7mXto357.jpg" id="pic"/>
        <h2><a href="https://lambdaschool.com/alumni/eric-blancas/">Lambda School Alumni Page</a></h2>
        </div>
        <center>
        <div id="box">
          <h2>Me as a Developer</h2>
          <p>Born and raised in San Diego, california. I always had an admiration for computers and technology, and social media was
          just starting to become popular in the beginning of my generation. Xanga was my first exposure to DOM manipulation
          of rendering of colors, and creation of user interfaces; thus begun my journey to programming. 
            My journey began with just one small Dom manipulation to making Http requests from servers. I enjoy writing eloquent, scalable 
          code and while I may not be perfect, I always have the time to improve upon my skillset because learning to better my code. I'm always
          open to learning new techniques and tricks to better my skill set (especially new Technologies!). Mern (an acronym for MongoDB, Express, 
          React and Node) is my primary Stack for Developing Web applications, I also specialize in the python stack for tensorflow and also flask for 
          api developement. As time goes by and as new things are being made, I'm always open to exchanging experiences, so please 
          feel free to email me at ericblancas23@gmail.com or feel free to look towards my linkedin page in the contact section :) 
          </p>
          <h2>My Hobbies</h2>
          <p>
            Fun fact about me is I participated in a competitive online Gaming competition for money during college.
          Our college team was featured twice on Espn for the national tournament but was knocked out early due to other 
          teams besting us, the contest I participated in is called Heroes of the dorms playing under Blizzard's famous online
          game Heroes of the storm. 
            Other hobbies include biking, photography, blogging, computer building and gaming :). 
          </p>
        </div>
        </center>
      </div>
    );
  }
}

export default Aboutme;
