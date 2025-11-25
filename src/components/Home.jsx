import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faCheck, faClone, faCode, faEnvelope, faLaptop, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import css from '../assets/css.png';
import js from '../assets/js.png';
import me from '../assets/profile.jpg';
import react from '../assets/react.svg';
import styles from '../styles/Home.module.css';
import Typewriter from './Typewriter.jsx';

const Home = () => {
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  /* const timerRef = useRef(null); */
  const [text, setText] = useState(
    {
      email: '',
      phone: ''
    }
  );
  const [copiedText, setCopiedText] = useState(
    {
      email: false,
      phone: false
    }
  );

  useEffect(() => {
    /* const refEmailText = emailRef.current.textContent;
    const refPhoneText = phoneRef.current.textContent; */
    if (emailRef.current && phoneRef.current) {
      setText(
        {
          email: emailRef.current.textContent,
          phone: phoneRef.current.textContent
        }
      );
    }
  }, []);

  const handleCopyToClipboard = async (text, type) => {
    /* const emailText = emailRef.current.textContent; */
    await navigator.clipboard.writeText(text);

    /* console.log('Copied to clipboard:', text); */

    if (type === 'email') {
      setCopiedText({
        email: true,
        phone: false
      });
      setTimeout(() => setCopiedText({ email: false, phone: false }), 2000);
    } else if (type === 'phone') {
      setCopiedText({
        email: false,
        phone: true
      });
      setTimeout(() => setCopiedText({ email: false, phone: false }), 2000);
    }

    /* set both to false but one to true depending the type */
    /* setCopiedText({
      email: false,
      phone: false,
      [type]: true
    }); */

    /* clean prev timer if exits */
    /* if (timerRef.current) {
      clearTimeout(timerRef.current);
    } */

    /* set new timer */
    /* timerRef.current = setTimeout(() =>
      setCopiedText((prevCopiedText) => ({
        ...prevCopiedText,
        [type]: false
      })), 2000); */
  }

  /* const [copiedText, setCopiedText] = useState();
  const [copied, setCopiedId] = useState();

  useEffect(() => {
    (async function run() {
      const emailText = await navigator.clipboard.readText();
      setCopiedText(emailText);
    }
    )();
  }, [copied]); */

  return (
    <section id="home" className={styles.home}>
      <div className={styles.firstDivision}>
        <header>
          <h3 className={styles.h3}>Welcome to my website!</h3>
          <h1 className={styles.h1}>Hi!, I&apos;m @elvisscochito<span className={styles.span}>a <Typewriter toRotate={["Web Developer", "Full-Stack Developer", "Front-End Developer", "Back-End Developer", "Data Scientist", "Mobile Developer"]} period={2000} /></span></h1>
          <h2 className={styles.h2}>Last year Computer Science student</h2>
        </header>

        <div className={styles.imagesAndStats}>
          <img src={react} alt="React logo" className={styles.reactLogo} />
          <img src={js} alt="JavaScript logo" className={styles.jsLogo} />
          <img src={css} alt="CSS logo" className={styles.cssLogo} />
          <img src={me} alt="Elviro Dominguez" className={styles.me} />
          <div className={styles.stats}>
            <div>
              <span className={styles.breakAfterEachWord}>+1 Year</span>
              <span className={styles.breakAfterEachWord}>Of experience</span>
            </div>
            <div>
              <span className={styles.breakAfterEachWord}>+10</span>
              <span className={styles.breakAfterEachWord}>projects</span>
            </div>
            <div>
              <span className={styles.breakAfterEachWord}>+1k</span>
              <span className={styles.breakAfterEachWord}>commits</span>
            </div>
          </div>
        </div>

        <div className={styles.body}>
          <p>At <a href="https://tec.mx/en" target="_blank" className={styles.link}>Tecnologico de Monterrey&#8599;</a> University. Looking for a <span className={styles.italic}>Part-Time</span> or <span className={styles.italic}>Full-Time</span> <span className={`${styles.italic} ${styles.bold}`}>Web </span>&#40;<span className={styles.bold}>Frontend</span>, <span className={styles.bold}>Backend</span> or <span className={styles.bold}>Fullstack</span>&#41;, <span className={`${styles.italic} ${styles.bold}`}>Data Science</span>, <span className={`${styles.italic} ${styles.bold}`}>Mobile </span>&#40;<span className={styles.bold}>Android</span>, <span className={styles.bold}>iOS</span> or <span className={styles.bold}>Hybrid</span>&#41;, <span className={`${styles.italic} ${styles.bold}`}>Networking</span>, <span className={`${styles.italic} ${styles.bold}`}>DevOps</span> or any other <span className={`${styles.italic} ${styles.bold}`}>IT</span> job opportunity.</p>
          <div className={styles.buttonsCtaContainer}>
            <a href="https://drive.google.com/file/d/1njTFGZCH0N8A3AmNbSSXfdo-4RofscqK/view?usp=sharing" target="_blank" className={styles.btnAux}>View Resume</a>
            <a href="#contact" className={styles.btn}>Get in touch</a>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.buttons}>
            <span className={styles.button}>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:contact@elvirodominguez.com?subject=Contacting%20for%20Job%20Opportunity&body=Hello,%20Elviro:%0D%0A%0D%0AI%20want%20to%20get%20in%20touch%20with%20you%20regarding%20a%20job%20opportunity..." ref={emailRef}>
                contact@elvirodominguez.com
              </a>
              {
                copiedText.email ?
                  <FontAwesomeIcon icon={faCheck} className={styles.copied} />
                  :
                  <FontAwesomeIcon icon={faClone} className={styles.copy} onClick={() => handleCopyToClipboard(text.email, 'email')} />
              }
            </span>
            <span className={styles.button}>
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+527771395795" ref={phoneRef}>
                +52 777 139 5795
              </a>
              {
                copiedText.phone ?
                  <FontAwesomeIcon icon={faCheck} className={styles.copied} />
                  :
                  <FontAwesomeIcon icon={faClone} className={styles.copy} onClick={() => handleCopyToClipboard(text.phone, 'phone')} />
              }
            </span>
            {/* <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        <FontAwesomeIcon icon={faPhone} className={styles.icon} /> */}
            <a href="https://www.linkedin.com/in/elviro-dominguez-soriano" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
            <a href="https://github.com/elvisscochito" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
          </div>
          <div className={styles.workStatusContainer}>
            <span className={styles.workStatus}>#OpenToWork<FontAwesomeIcon icon={faCode} /></span>
            {/* <div className={styles.workTypeContainer}> */}
            <span className={`${styles.workType} ${styles.first}`}>Hybrid <FontAwesomeIcon icon={faBolt} /></span>
            <span className={`${styles.workType} ${styles.second}`}>Remote <FontAwesomeIcon icon={faLaptop} /></span>
            <span className={`${styles.workType} ${styles.third}`}>Onsite <FontAwesomeIcon icon={faMapPin} /></span>
            {/* </div> */}
          </div>
        </footer>
      </div>

      <div className={styles.secondDivision}>
        <img src={react} alt="React logo" className={styles.reactLogo} />
        <img src={js} alt="JavaScript logo" className={styles.jsLogo} />
        <img src={css} alt="CSS logo" className={styles.cssLogo} />
        <img src={me} alt="Elviro Dominguez" className={styles.me} />
        <div className={styles.stats}>
          <div>
            <span className={styles.breakAfterEachWord}>+1 Year</span>
            <span className={styles.breakAfterEachWord}>Of experience</span>
          </div>
          <div>
            <span className={styles.breakAfterEachWord}>+10</span>
            <span className={styles.breakAfterEachWord}>projects</span>
          </div>
          <div>
            <span className={styles.breakAfterEachWord}>+1k</span>
            <span className={styles.breakAfterEachWord}>commits</span>
          </div>
        </div>
      </div>

      {/* <div className={styles.more}>
        <span>Scroll down to know more</span>
        <a href="#about">
          <FontAwesomeIcon icon={faArrowDown} className={styles.arrowIcon} />
        </a>
      </div> */}
    </section>
  );
}

export default Home;
