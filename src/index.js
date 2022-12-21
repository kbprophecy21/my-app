import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import Navbar from './Components/Nav.js';
import FunctionalComponent from './Components/counter.js';
import ClassComponent from './Components/counterClass.js';
import Sections from './Components/section';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <FunctionalComponent />
    <Sections />
    <ClassComponent />
  </React.StrictMode>
);

