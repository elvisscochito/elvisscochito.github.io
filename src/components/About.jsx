/* import { faClone } from '@fortawesome/free-regular-svg-icons'; */
import { faEnvelope, faGraduationCap, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import me from '../assets/me.jpg';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <header className={styles.header}>
        <h2 className={styles.h2}>About me</h2>
      </header>
      <div className={styles.main}>
        <div className={styles.info}>
          <div className={styles.school}>
            <FontAwesomeIcon icon={faGraduationCap} className={styles.icon} />
            <div className={styles.schoolInfo}>
              <span>Education</span>
              <span>Tecnológico de Monterrey, Campus Monterrey</span>
              <span>B.S. in Computer Science and Technology, concentration in Data Science</span>
            </div>
          </div>

          <div className={styles.phone}>
            <FontAwesomeIcon icon={faMobile} className={styles.icon} />
            <div className={styles.phoneInfo}>
              <span>Phone number</span>
              <span>Give me a call or send me a message at:</span>
              <span>+52 777 346 4786</span>
            </div>
          </div>

          <div className={styles.location}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
            <div className={styles.locationInfo}>
              <span>Location</span>
              <span>I'm from:</span>
              <span>Cuernavaca, Morelos, México{/*  (the city of the Eternal Spring) */}</span>
            </div>
          </div>

          <div className={styles.email}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <div className={styles.emailInfo}>
              <span>Email</span>
              <span>Send me an email at:</span>
              <a href="mailto:contact@elvirodominguez.com" className={styles.link}>contact@elvirodominguez.com{/* <FontAwesomeIcon icon={faClone} className={styles.iconAux} /> */}</a>
            </div>
          </div>
        </div>
        {/* <div className={styles.imageContainer}> */}
        <img src={me} alt="Elviro Dominguez" className={styles.image} />

        {/* <div className={styles.buttonsContainer}>
            <a href="#contact" className={styles.btn}>Get in touch</a>

            <a href="https://drive.google.com/file/d/1
            5p8T8u2W2fZ9v5b1gZQ6y7Bj9JZ3U8k/view?usp=sharing" target="_blank" className={styles.btnAux}>Download resume</a>

          </div>
        </div> */}
      </div>
    </section>
  )
}

export default About
