import React from 'react'


function Header(){
    return (
        <header>
    <h1>Juwon</h1>
    <nav>
      <a href="#about">About Me</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact Me</a>
      {/* <!-- Link this to your resume! --> */}
    
      <a href = "./resume.pdf" >Resume</a>
    </nav>
  </header>
    )
}

export default Header