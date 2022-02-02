import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';

import calcScren from './Components/Portfolio/projectsScreenShots/calculatorScreenShot.png';
import movingDivsScreen from './Components/Portfolio/projectsScreenShots/movingDivsScreenShot.png';
import imgCropperScreen from './Components/Portfolio/projectsScreenShots/imageCropperScreenShot.png'
import toDoScreen from './Components/Portfolio/projectsScreenShots/toDoScreenShot.png';
import timerScreen from './Components/Portfolio/projectsScreenShots/timerAppScreenShot.png';
import formComponentScreen from './Components/Portfolio/projectsScreenShots/formComponentScreenShot.png';

function App() {

  const [pages, setPages] = useState([
    {
      id: Math.random(),
      name: 'Home',
      href: '#home',
      isActive: 'active'
    },
    {
      id: Math.random(),
      name: 'Portfolio',
      href: '#portfolio',
      isActive: ''
    },
    {
      id: Math.random(),
      name: 'About',
      href: '#about',
      isActive: ''
    }
  ]);

  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handlePage = (pageName) => {
    if (pageName === 'Home') {
      setIsHomeOpen(true);
      setIsPortfolioOpen(false);
      setIsAboutOpen(false);
      setPages([
        {
          id: Math.random(),
          name: 'Home',
          href: '#',
          isActive: 'active'
        },
        {
          id: Math.random(),
          name: 'Portfolio',
          href: '#portfolio',
          isActive: ''
        },
        {
          id: Math.random(),
          name: 'About',
          href: '#about',
          isActive: ''
        }
      ])
    } else if(pageName === 'Portfolio') {
      setIsHomeOpen(false);
      setIsPortfolioOpen(true);
      setIsAboutOpen(false);
      setPages([
        {
          id: Math.random(),
          name: 'Home',
          href: '#',
          isActive: ''
        },
        {
          id: Math.random(),
          name: 'Portfolio',
          href: '#portfolio',
          isActive: 'active'
        },
        {
          id: Math.random(),
          name: 'About',
          href: '#about',
          isActive: ''
        }
      ])
    } else {
      setIsHomeOpen(false);
      setIsPortfolioOpen(false);
      setIsAboutOpen(true);
      setPages([
        {
          id: Math.random(),
          name: 'Home',
          href: '#',
          isActive: ''
        },
        {
          id: Math.random(),
          name: 'Portfolio',
          href: '#portfolio',
          isActive: ''
        },
        {
          id: Math.random(),
          name: 'About',
          href: '#about',
          isActive: 'active'
        }
      ])
    }
  };

  const projects = [
    {
      id: Math.random(),
      name: 'Calculator',
      urlGit: 'https://github.com/hayktermarkosyan/calculator',
      screenShot: {
        src: calcScren,
        styles: 'calcImgStyles'
      },
      description: 'The application is executed on pure JS using the Bootstrap library for styling. The application is a classic calculator and performs the following actions: addition, subtraction, division, multiplication, square root of a number,  second square of a number. In this application there is also an ability to write mathematical expressions in a line. When calculating mathematical expressions written in a line, the application calculates the final value, taking into account the priority of mathematical operations. The application also has a backspace button to delete the last recorded character.'
    },
    {
      id: Math.random(),
      name: 'Moving Divs',
      urlGit: 'https://github.com/hayktermarkosyan/movingDivs',
      screenShot: {
        src: movingDivsScreen,
        styles: 'movingDivsImgStyles'
      },
      description: 'The application is implemented on pure JS, without using any libraries. The application interface is a certain field within which two objects (squares) move: one along the X axis, the other along the Y axis. On the right, there are settings for objects: color, movement speed, width and height of the object. When two objects intersect, the top one takes on the transparency property so that the bottom object can be seen.'
    },
    {
      id: Math.random(),
      name: 'Image Cropper',
      urlGit: 'https://github.com/hayktermarkosyan/ImgCropper',
      screenShot: {
        src: imgCropperScreen,
        styles: 'imageCropperImgStyles'
      },
      description: 'The application is executed on pure JS using the Bootstrap library for styling. The application allows you to upload an image, resize it, select parameters for cropping the image (either by entering the width and height dimensions, or using the mouse by dragging the corners of the cropper), drag the cropper with the mouse to the desired location on the image and crop the image. In addition, the application has the ability to rotate the uploaded image, as well as display it in a mirror effect.'
    },
    {
      id: Math.random(),
      name: 'To Do App',
      urlGit: 'https://github.com/hayktermarkosyan/toDo',
      screenShot: {
        src: toDoScreen,
        styles: 'toDoImgStyles'
      },
      description: 'The design of this project was done with pure CSS, but its functionality was realized using the JavaScript library - React.js. The application is designed to create notes, mark them as completed and then delete them.'
    },
    {
      id: Math.random(),
      name: 'Timer App',
      urlGit: 'https://github.com/hayktermarkosyan/timer_app',
      screenShot: {
        src: timerScreen,
        styles: 'timerImgStyles'
      },
      description: 'The design of this project was done with pure CSS, but its functionality was realized using the JavaScript library - React.js. A user sets the date of his event and the application counts the days, hours, minutes, and seconds till that day and shows it on display. The application saves the event date on the browser`s local storage in order to remember the date even when you close the browser.'
    },
    {
      id: Math.random(),
      name: 'Form Component',
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
        handlePage={handlePage}
      />

      {isHomeOpen && (
        <Home />
      )}

      {isPortfolioOpen && (
        <Portfolio projects={projects}/>
      )}

      {isAboutOpen && (
        <About />
      )}

      <Footer />
    </div>
  );
}

export default App;
