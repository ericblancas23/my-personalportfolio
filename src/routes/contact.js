import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

class Contact extends Component {
    render() {
        return(
                <div className="App">
                  <header className="App-header">
                    <img src="http://www.iconninja.com/files/597/234/361/earth-globe-planet-icon.png" className="App-logo" alt="logo" />
                    <h1 className="App-title">Eric Blancas: Portfolio</h1>
                    <Menu customCrossIcon={ <img src="https://cdn4.iconfinder.com/data/icons/abstract-shapes-5-1/32/arrow_point_left_edit_abstract_creative_design-256.png" /> } width={ '150px' } id="bm-burger-button"  noOverlay>
                        <a id="home" href="/">Home</a>
                        <a id="about"  href="/about-me">About</a>
                        <a id="projects" href="/projects">Projects</a>
                        <a id ="contact" href="/contact">Contact</a>
                   </Menu>
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

export default Contact;