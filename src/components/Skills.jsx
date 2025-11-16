import css from '../assets/css.png';
import express from '../assets/expressjs.svg';
import figma from '../assets/figma2.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import jupyter from '../assets/jupyter.png';
import mongodb from '../assets/mongodb.svg';
import mysql from '../assets/mysql.png';
import node from '../assets/nodejs.png';
import python from '../assets/python.png';
import react from '../assets/react.svg';
import swift from '../assets/swift.png';
import xcode from '../assets/xcode.png';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <header className={styles.header}>
        <h2 className={styles.skillsHeading}>Skills are never enough.</h2>
        <span>So I never stop learning.</span>
      </header>
      <div className={styles.skillsContainer}>
        <div className={styles.webDev}>
          <h3>Web Development</h3>
          <ul>
            <li>
              <div className={styles.card}>
                <img src={html} alt="HTML5 Logo" className={styles.icon} />
                <span>HTML</span>
              </div>
            </li>
            <li>
              <div className={styles.card}>
                <img src={css} alt="CSS3 Logo" className={styles.icon} />
                <span>CSS</span>
              </div>
            </li>
            <li>
              <div className={styles.card}>
                <img src={js} alt="JavaScript Logo" className={styles.icon} />
                <span>JavaScript</span>
              </div>
            </li>
            <li>
              <div className={styles.card}>
                <img src={react} alt="React Logo" className={styles.icon} />
                <span>React.js</span>
              </div>
            </li>
            <li>
              <div className={styles.card}>
                <img src={node} alt="Node.js Logo" className={styles.icon} />
                <span>Node.js</span>
              </div>
            </li>
            <li>
              <div className={styles.card}>
                <img src={express} alt="Express.js Logo" className={styles.icon} />
                <span>Express.js</span>
              </div>
            </li>
            {/* <li>RESTful APIs</li> */}
          </ul>
        </div>
        <div className={styles.mobileDev}>
          <h3>Mobile Dev</h3>
          <ul>
            <li>
              <div className={styles.card}>
                <img src={swift} alt="Swift Logo" className={styles.icon} />
                <span>Swift/SwiftUI</span>
              </div>
            </li>
            <li>
              <div className={styles.card}>
                <img src={xcode} alt="Xcode Logo" className={styles.icon} />
                <span>Xcode</span>
              </div>
            </li>
            {/* <li>iOS Development</li>
            <li>Kotlin</li>
            <li>Android Studio</li> */}

            {/* <li>Mobile UI/UX Design</li>
            <li>Cross-Platform Development</li>
            <li>App Deployment (App Store & Google Play)</li> */}
          </ul>
        </div>
        <div className={styles.dataScience}>
          <h3>Data Science & ML</h3>
          <ul>
            <li>
              <div className={styles.card}>
                <img src={python} alt="Python Logo" className={styles.icon} />
                <span>Python</span>
              </div>
            </li>
            {/* <li>Pandas</li>
            <li>NumPy</li>
            <li>Matplotlib</li>
            <li>Scikit-learn</li> */}
            <li>
              <div className={styles.card}>
                <img src={jupyter} alt="Jupyter Notebooks Logo" className={styles.icon} />
                <span>Jupyter Notebooks</span>
              </div>
            </li>
            {/* <li>Data Visualization</li> */}
            {/* <li>Statistical Analysis</li> */}
          </ul>
        </div>
        <div className={styles.databases}>
          <h3>Databases</h3>
          <ul>
            {/* <li>Relational/SQL:</li> */}
            <li>
              <div className={styles.card}>
                <img src={mysql} alt="MySQL Logo" className={styles.icon} />
                <span>MySQL</span>
              </div>
            </li>
            {/* <li>Non-relational/NoSQL:</li> */}
            <li>
              <div className={styles.card}>
                <img src={mongodb} alt="MongoDB Logo" className={styles.icon} />
                <span>MongoDB</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.versionControl}>
          <h3>Version Control</h3>
          <ul>
            <li>
              <div className={styles.card}>
                <img src={git} alt="Git Logo" className={styles.icon} />
                <span>Git {/* & GitHub */}</span>
              </div>
            </li>
            <li>
              <div className={styles.card}>
                <img src={github} alt="GitHub Logo" className={styles.icon} />
                <span>GitHub</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.design}>
          <h3>Design</h3>
          <ul>
            <li>
              <div className={styles.card}>
                <img src={figma} alt="Figma Logo" className={styles.icon} />
                <span>Figma</span>
              </div>
            </li>
            {/* <li>Adobe XD</li>
            <li>Sketch</li> */}
            {/* <li>Wireframing & Prototyping</li> */}
          </ul>
        </div>
        {/* <div className={styles.tools}>
          <h3>Tools & Platforms</h3>
          <ul>
            <li>VS Code</li>
            <li>Webpack</li>
            <li>Babel</li>
            <li>NPM / Yarn</li>
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>Chrome DevTools</li>
            <li>Postman</li>
            <li>Heroku</li>
            <li>Netlify</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}

export default Skills;
