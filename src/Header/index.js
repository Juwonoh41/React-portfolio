import React from 'react'
import Resume from '../Resume/Resume_3.pdf'

function Header(){
    return (
        <header>
    <h1>Juwon Oh</h1>
    <nav>
      <a href="#aboutMe">About Me</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact Me</a>
      {/* <!-- Link this to your resume! --> */}
    
      <a href = {Resume} target = "_blank">Resume</a>
    </nav>
  </header>
    )
}

export default Header