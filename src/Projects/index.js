import React from 'react'

function Project(){
    return(
    <main>
        <section class="page-section" id="work">
      <h2>Work</h2>
      <div class="flex-container">

        <a href="https://vbmisra.github.io/trivia/" class="flex-item " id="trivia">
          
          <div>
            <h3 class="project-titles">Trivia Quiz</h3>
          </div>
        </a>
        
        <a href="https://juwonoh41.github.io/weather-dashboard/" class="flex-item" id="weather-dashboard">
          <div>
            <h3>weather-dashboard</h3>
            <span>Html/CSS/Javascript</span>
          </div>
        </a>
        <a href="https://github.com/Juwonoh41/good-readme-generator.git" class="flex-item" id="Good_Readme">
          <div>
            <h3>Good_Readme.md_Generator</h3>
            <span>Node.js</span>
          </div>
        </a>

        
      </div>
    </section>
    </main>
    )
}

export default Project