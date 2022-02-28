//import { useState } from 'react';
import './App.css';

import { Route, Routes } from "react-router-dom";

import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';

import calcScreen from './Components/Portfolio/projectsScreenShots/calculatorScreenShot.png';
import movingDivsScreen from './Components/Portfolio/projectsScreenShots/movingDivsScreenShot.png';
import imgCropperScreen from './Components/Portfolio/projectsScreenShots/imageCropperScreenShot.png'
import toDoScreen from './Components/Portfolio/projectsScreenShots/toDoScreenShot.png';
import timerScreen from './Components/Portfolio/projectsScreenShots/timerAppScreenShot.png';
import formComponentScreen from './Components/Portfolio/projectsScreenShots/formComponentScreenShot.png';

function App() {

  const pages = [
    {
      id: Math.random(),
      name: 'Home',
      to: '',
      isActive: 'active'
    },
    {
      id: Math.random(),
      name: 'Portfolio',
      to: 'portfolio',
      isActive: ''
    },
    {
      id: Math.random(),
      name: 'About',
      to: 'about',
      isActive: ''
    }
  ];

  const projects = [
    {
      id: Math.random(),
      name: 'Calculator',
      url: 'https://hayktermarkosyan-calculatorapp.netlify.app',
      urlGit: 'https://github.com/hayktermarkosyan/calculator',
      screenShot: {
        src: calcScreen,
        styles: 'calcImgStyles'
      },
      description: 'The application is executed on pure JS using the Bootstrap library for styling. The application is a classic calculator with special features: it prioritizes mathematical operations and has a backspace button to delete the last recorded character.'
    },
    {
      id: Math.random(),
      name: 'Moving Divs',
      url: 'https://hayktermarkosyan-movingdivsapp.netlify.app',
      urlGit: 'https://github.com/hayktermarkosyan/movingDivs',
      screenShot: {
        src: movingDivsScreen,
        styles: 'movingDivsImgStyles'
      },
      description: 'The application is implemented on pure JS, without using any libraries.'
    },
    {
      id: Math.random(),
      name: 'Image Cropper',
      url: 'https://hayktermarkosyan-imagecropperapp.netlify.app',
      urlGit: 'https://github.com/hayktermarkosyan/ImgCropper',
      screenShot: {
        src: imgCropperScreen,
        styles: 'imageCropperImgStyles'
      },
      description: 'The application is executed on pure JS using the Bootstrap library for styling.'
    },
    {
      id: Math.random(),
      name: 'To Do App',
      url: 'https://hayktermarkosyan-todoapp.netlify.app',
      urlGit: 'https://github.com/hayktermarkosyan/toDo',
      screenShot: {
        src: toDoScreen,
        styles: 'toDoImgStyles'
      },
      description: 'The design of this project was done with pure CSS, but its functionality was realized using the JavaScript library - React.js. The application is designed to create notes, mark them as completed and delete those.'
    },
    {
      id: Math.random(),
      name: 'Timer App',
      url: 'https://hayktermarkosyan-timerapp.netlify.app',
      urlGit: 'https://github.com/hayktermarkosyan/timer_app',
      screenShot: {
        src: timerScreen,
        styles: 'timerImgStyles'
      },
      description: 'The design of this project was done with pure CSS, but its functionality was realized using the JavaScript library - React.js.'
    },
    {
      id: Math.random(),
      name: 'Form Component',
      url: 'https://hayktermarkosyan-formcomponent.netlify.app',
      urlGit: 'https://github.com/hayktermarkosyan/formComponent',
      screenShot: {
        src: formComponentScreen,
        styles: 'formComponentImgStyles'
      },
      description: 'The component is implemented using the React.js library. The Bootstrap library was used for styling. The component is a regular form and is intended to be filled in by the user.'
    },
  ];

  return (
    <div>
      <Navbar 
        pages={pages}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio projects={projects}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
