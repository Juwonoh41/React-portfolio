import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './Header'
import Banner from './Banner'
import AboutMe from './AboutMe'
import Project from './Projects'
function App() {
  return (
  <div> 
    <Header/>
    <Banner/>
    <AboutMe/>
    <Project/>
  </div>
  );
}

export default App;
