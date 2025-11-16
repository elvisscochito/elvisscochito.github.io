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
            <li>HTML</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful APIs</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
        <div className={styles.mobileDev}>
          <h3>Mobile Dev</h3>
          <ul>
            <li>Swift/SwiftUI</li>
            <li>Xcode</li>
            <li>iOS Development</li>
            <li>Kotlin</li>
            <li>Android Studio</li>

            {/* <li>Mobile UI/UX Design</li>
            <li>Cross-Platform Development</li>
            <li>App Deployment (App Store & Google Play)</li> */}
          </ul>
        </div>
        <div className={styles.dataScience}>
          <h3>Data Science & ML</h3>
          <ul>
            <li>Python</li>
            <li>Pandas</li>
            <li>NumPy</li>
            <li>Matplotlib</li>
            <li>Scikit-learn</li>
            <li>Jupyter Notebooks</li>
            <li>Data Visualization</li>
            {/* <li>Statistical Analysis</li> */}
          </ul>
        </div>
        <div className={styles.databases}>
          <h3>Databases</h3>
          <ul>
            <li>Relational/SQL:</li>
            <li>MySQL</li>
            <li>Non-relational/NoSQL:</li>
            <li>MongoDB</li>
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
