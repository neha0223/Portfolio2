import { useEffect } from "react"
import { initPortfolioJS } from "../legacy/script"

const BASE = "/Portfolio2"

const projectCards = [
  {
    href: `${BASE}/legacy/dorm.html`,
    img: `${BASE}/assets/gifs/Intro.GIF`,
    alt: "Dorm Simulator Thumbnail",
    caption: "dorm simulator: first-person explorer",
  },
  {
    href: `${BASE}/legacy/VIP.html`,
    img: `${BASE}/assets/images/low_res_Sandy.gif`,
    alt: "Electronic ARTrium Thumbnail",
    caption: "Georgia Tech Presents: the electronic ARTrium",
  },
  {
    href: `${BASE}/legacy/TAR.html`,
    img: `${BASE}/assets/images/expanding.gif`,
    alt: "AR Digi Cam Thumbnail",
    caption: "AR Digi Cam",
  },
  {
    href: `${BASE}/legacy/penelope.html`,
    img: `${BASE}/assets/images/pr.png`,
    alt: "Penelope Road Thumbnail",
    caption: "penelope road: mini documentary w/ premiere pro",
  },
  {
    href: `${BASE}/legacy/needfinding.html`,
    img: `${BASE}/assets/gifs/stairlift.gif`,
    alt: "Stairlift GIF",
    caption: "Cooper Carry: urban mobility UX strategy",
  },
  {
    href: `${BASE}/legacy/jewelia.html`,
    img: `${BASE}/assets/gifs/mockup2.gif`,
    alt: "Jewelia Thumbnail",
    caption: "jewelia: GenAI-based jewelry inventory",
  },
]

function ProjectCard({ href, img, alt, caption }) {
  return (
    <div className="equal-column">
      <a href={href}>
        <img
          src={img}
          alt={alt}
          style={{
            width: "100%",
            maxWidth: "450px",
            marginTop: "1em",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        />
      </a>
      <p className="caption" style={{ marginTop: "0.5em" }}>
        <i>{caption}</i>
      </p>
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    initPortfolioJS({
      sidebarUrl: `${BASE}/sidebar.html`,
    })
  }, [])

  return (
    <div className="container">
      <div id="sidebar-container"></div>

      <main className="content">
        <h1>hi, i'm neha shirish shanbhag 👋🙂</h1>

        <section id="home">
          <div className="about-container">
            <div className="info">
              <h2>about me</h2>

              <p>
                I'm currently a fourth-year undergraduate student studying at the
                Georgia Institute of Technology in Atlanta!
              </p>

              <p>
                I'm majoring in Computational Media with a focus in Media & Games,
                and a minor in Industrial Design, which basically means I spend my
                time bouncing between code, design tools, and storytelling. I've
                always loved figuring out how things look, feel, and work
                together—whether that's building a game, designing an app, or
                crafting interactive experiences.
              </p>

              <p>
                The mix of tech and creativity in my major has let me explore
                everything from 3D modeling and animation to UX research and
                immersive media. I'm especially drawn to projects that let me
                blend those skills in unexpected ways.
              </p>

              <p>
                Sift through the left sidebar or search by skill to the right to
                explore the projects I've been a part of.
              </p>

              <br />
              <br />

              <h2>check out my recent projects below 👇</h2>
            </div>

            <div className="info">
              <h2>skills</h2>
              <br />

              {/* keep your dropdown markup as-is, but FIX class -> className */}
              <div className="dropdown">
                <h3>
                  visualization <span className="caret">▼</span>
                </h3>
                <div className="dropdown-content">
                  <ul>
                    <li><a href={`${BASE}/legacy/blender.html`}>Blender</a></li>
                    <li><a href={`${BASE}/legacy/unity.html`}>Unity + XR Interaction Toolkit</a></li>
                    <li>Unreal</li>
                    <li>Maya</li>
                    <li>VRED Pro</li>
                    <li>Keyshot</li>
                    <li>Midjourney</li>
                    <li>Runway</li>
                    <li><a href={`${BASE}/legacy/VIP.html`}>CAD</a></li>
                  </ul>
                </div>
              </div>

              <div class="dropdown">
                  <h3> design <span class="caret">▼</span></h3>
                  <div class="dropdown-content">
                      <ul>
                          <li>
                              <a href="figma.html"> Figma </a>
                          </li>
                          <li>
                              <a href="poster.html"> Adobe Photoshop </a>
                          </li>

                          <li>
                              <a href="poster.html"> Adobe Illustrator </a>
                          </li>
                          <li>Adobe InDesign</li>
                          <li>Adobe XD</li>
                          <li>Sketch</li>
                          <li>
                              <a href="spotify.html"> Android Studio </a>
                          </li>
                          <li>Canva</li>
                          <li>Procreate</li>
                      </ul>
                  </div>
              </div>

              <div class="dropdown">
                  <h3>video production <span class="caret">▼</span> </h3>
                  <div class="dropdown-content">
                      <li>
                          <a href="premiere.html"> Adobe Premiere Pro</a>
                      </li>
                          <li>Adobe After Effects</li>
                          <li>Adobe Animate</li>
                  </div>
              </div>

              <div class="dropdown">
                  <h3>web technologies <span class="caret">▼</span> </h3>
                  <div class="dropdown-content">
                      <li>
                          <a href="cs.html"> C# </a>
                      </li>
                          <li>
                              <a href="mystery.html"> C </a>
                          </li>
                          <li>C++</li>
                          <li>
                              <a href="spotify.html"> Java </a>
                          </li>
                          <li>
                              <a href="VIP.html"> Python </a>

                          </li>
                          <li>
                              <a href="index.html"> HTML </a>
                          </li>
                          <li>
                              <a href="index.html"> CSS </a>
                          </li>
                          <li>
                              <a href="index.html"> JavaScript </a>
                          </li>
                          <li>React.js</li>
                          <li>Node.js</li>
                          <li>Kotlin</li>
                  </div>
              </div>

              <div class="dropdown">
                  <h3>productivity <span class="caret">▼</span> </h3>
                  <div class="dropdown-content">
                          <li>Microsoft Office Suite</li>
                          <li>GitHub</li>
                          <li>Jira</li>
                          <li>Trello</li>
                          <li>Tableau</li>
                  </div>
              </div>  
                <h2>coursework </h2>
          
                <div class="dropdown">
                    <h3>computer science<span class="caret">▼</span> </h3>
                    <div class="dropdown-content">
                            <li>Object Oriented Programming</li>
                            <li>Data Structures & Algorithms</li>
                            <li>Linear Algebra</li>
                            <li>Media Device Architectures</li>
                            <li>Objects and Design</li>
                            <li>Computer Graphics</li>
                            <li>Information Visualization</li>
                            <li>Artificial Intelligence</li>
                            <li>Game AI</li>
                    </div>
                </div> 
                <div class="dropdown">
                    <h3>media & games<span class="caret">▼</span> </h3>
                    <div class="dropdown-content">
                            <li>Game Studies</li>
                            <li>Media Studies</li>
                            <li>Game Studio</li>
                            <li>Construct a Moving Image</li>
                            <li>Interactive Narrative</li>
                            <li>Principles of Visual Design</li>
                            <li>Mixed Reality Design</li>
                            <li>Animation</li>
                            <li>Film & Television</li>
                    </div>
                </div> 
                <div class="dropdown">
                    <h3>industrial design<span class="caret">▼</span> </h3>
                    <div class="dropdown-content">
                            <li>Human Factors in Design</li>
                            <li>Visual Design Thinking</li>
                            <li>Design Methods</li>
                            <li>Adv Rendering Techniques</li>
                            <li>User Testing for Experience</li>
                    </div>
                </div> 

            </div>

            <div className="photo">
              <img
                src={`${BASE}/assets/images/Neha_picture.jpg`}
                alt="A photo of Neha"
              />

              <p className="caption">
                BS in Computational Media (Media & Games)
                <br />
                Minor in Industrial Design
                <br />
                Georgia Institute of Technology
              </p>

              <p className="caption">
                nshanbhag6@gatech.edu
                <br />
                (770) 367-1413
                <br />
                LinkedIn |{" "}
                <a
                  href="https://linkedin.com/in/neha-shanbhag"
                  target="_blank"
                  rel="noreferrer"
                >
                  Neha Shanbhag
                </a>
              </p>
            </div>
          </div>

          <div className="equal-columns">
            {projectCards.slice(0, 3).map((p) => (
              <ProjectCard key={p.href} {...p} />
            ))}
          </div>

          <div className="equal-columns">
            {projectCards.slice(3, 6).map((p) => (
              <ProjectCard key={p.href} {...p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
