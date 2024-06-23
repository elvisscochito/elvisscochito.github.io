import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faBolt, faClone, faCode, faEnvelope, faLaptop, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import js from '../assets/js.png';
import react from '../assets/react.svg';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <header>
        <h3 className={styles.h1}>Welcome to my website!</h3>
        <h1 className={styles.h1}>Hi!, I'm <span className={styles.span}>@elvisscochito</span></h1>
        <h2 className={styles.h2}>Last year Computer Science student</h2>
      </header>
      <div className={styles.body}>
        <p>At <a href="https://tec.mx/en" target="_blank" className={styles.link}>Tecnologico de Monterrey&#8599;</a> University. Looking for a <span className={styles.span}>Frontend</span>, <span className={styles.span}>Backend</span> or <span className={styles.span}>Fullstack</span> job opportunity.</p>
        <div className={styles.buttonsCtaContainer}>
          <a href="https://drive.google.com/file/d/1njTFGZCH0N8A3AmNbSSXfdo-4RofscqK/view?usp=sharing" target="_blank" className={styles.btnAux}>View Resume</a>
          <a href="#contact" className={styles.btn}>Get in touch</a>
        </div>
      </div>
      <img src={react} alt="React logo" className={styles.reactLogo} />
      <img src={js} alt="Tec de Monterrey logo" className={styles.jsLogo} />
      <footer className={styles.buttons}>
        <span href="mailto:contact@elvirodominguez.com?subject=Contacting%20for%20opportunity&body=Hello,%20Elviro:" target="_blank" className={styles.link}>
          <FontAwesomeIcon icon={faEnvelope} />
          contact@elvirodominguez.com
          <FontAwesomeIcon icon={faClone} className={styles.copy} />
        </span>
        <span a href="tel:+527773464786" className={styles.link}>
          <FontAwesomeIcon icon={faPhone} />
          +52 777 346 4786
          <FontAwesomeIcon icon={faClone} className={styles.copy} />
        </span>
        {/* <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        <FontAwesomeIcon icon={faPhone} className={styles.icon} /> */}
        <a href="https://www.linkedin.com/in/elviro-dominguez-soriano" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
        <a href="https://github.com/elvisscochito" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
      </footer>
      <div className={styles.workStatusContainer}>
        <span className={styles.workStatus}>#OpenToWork<FontAwesomeIcon icon={faCode} className={styles.icon} /></span>
        {/* <div className={styles.workTypeContainer}> */}
        <span className={`${styles.workType} ${styles.first}`}>Hybrid <FontAwesomeIcon icon={faBolt} className={styles.icon} /></span>
        <span className={`${styles.workType} ${styles.second}`}>Remote <FontAwesomeIcon icon={faLaptop} className={styles.icon} /></span>
        <span className={`${styles.workType} ${styles.third}`}>Onsite <FontAwesomeIcon icon={faMapPin} className={styles.icon} /></span>
        {/* </div> */}
      </div>
      {/*  <div className={styles.stats}>
        <div>
          <span class={styles.breakAfterEachWord}>+3 Months</span>
          <span class={styles.breakAfterEachWord}>Of experience</span>
        </div>
        <div>
          <span class={styles.breakAfterEachWord}>+17</span>
          <span class={styles.breakAfterEachWord}>repositories</span>
        </div>
        <div>
          <span class={styles.breakAfterEachWord}>+678</span>
          <span class={styles.breakAfterEachWord}>commits</span>
        </div>
      </div> */}
      <div className={styles.more}>
        <span>Scroll down to know more</span>
        <a href="#about">
          <FontAwesomeIcon icon={faArrowDown} className={styles.arrowIcon} />
        </a>
      </div>
    </section>
  );
}

export default Home;
