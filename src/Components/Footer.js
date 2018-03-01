import React, { Component } from 'react';

const style = {

    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "20px",
    width: "100%",
}

// const phantom = {
//     display: 'block',
//     padding: '20px',
//     height: '60px',
//     width: '100%',
// } 

export const Footer = () => (
    <div>
        <div style={style}>
        <a href="https://github.com/ericblancas23"> <img className="clearImg"src={require('../Components/Octocat.png')} style={{height: 40, width: 40}}/></a>
                    <a href="https://www.linkedin.com/in/eric-blancas23/"><img className="clearImg"src={require('../Components/linkedin.png')} style={{height: 40, width: 40}}/></a>
        </div>
    </div>
);

