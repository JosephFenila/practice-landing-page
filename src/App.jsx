import React from 'react';
import { Achievement, Navbar } from './components';
import { Hero } from './components'; 
import {Companies} from './components';
import {Courses} from './components';
import {Categories} from './components';
import {Feedback} from './components';
import {CTA} from './components';
import {Footer} from './components';
import { CardSlider } from './components';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Companies/> 
      <Courses/>     
      <Achievement/>
      <Categories/>
      <Feedback/>      
      <CTA/>
      <Footer/>
         
    </div>
  );
};

export default App;
