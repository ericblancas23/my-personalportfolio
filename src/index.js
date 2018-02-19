import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Aboutme from './routes/about-me.js';
import Projects from './routes/my-projects.js';
import Contact from './routes/contact';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter>
  <div>
    <Route exact path="/" component={App} />
    <Route exact path="/about-me" component={Aboutme} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contact" component={Contact} />
  </div>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
