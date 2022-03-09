import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './Header'
import Banner from './Banner'
import AboutMe from './AboutMe'
import Project from './Projects'
import Contact from './Contact'
function App() {
  return (
  <div> 
    <Header/>
    <Banner/>
    <AboutMe/>
    <Project/>
    <Contact/>
    <Router>
      <Switch>
        <Route exact path = '/aboutMe' component={AboutMe}/>
        <Route exact path = '/projects' component= {Project}/>
        
      </Switch>
    </Router>
    
  </div>
  );
}

export default App;
