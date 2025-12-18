import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faCheck, faClone, faCode, faEnvelope, faLaptop, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import css from '../assets/css.svg';
import js from '../assets/js.svg';
import me from '../assets/profile.webp';
import react from '../assets/react.svg';
import styles from '../styles/Home.module.css';
import Typewriter from './Typewriter.jsx';

const Home = () => {
  const { t } = useTranslation("global");
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
          <h3 className={styles.h3}>{t('Home.title')}</h3>
          <h1 className={styles.h1}>{t('Home.heading')}<span className={styles.span}>{t('Home.Typewriter.A')} <Typewriter toRotate={[t('Home.Typewriter.Web Developer'), t('Home.Typewriter.Full-Stack Developer'), t('Home.Typewriter.Front-End Developer'), t('Home.Typewriter.Back-End Developer'), t('Home.Typewriter.Data Scientist'), t('Home.Typewriter.Mobile Developer')]} period={2000} /></span></h1>
          <h2 className={styles.h2}>{t('Home.subheading')}</h2>
        </header>

        <div className={styles.imagesAndStats}>
          <img src={react} alt="React logo" className={styles.reactLogo} />
          <img src={js} alt="JavaScript logo" className={styles.jsLogo} />
          <img src={css} alt="CSS logo" className={styles.cssLogo} />
          <img src={me} alt="Elviro Dominguez" className={styles.me} />
          <div className={styles.stats}>
            <div>
              <span className={styles.breakAfterEachWord}>+1 {t('Home.Stats.Years')}</span>
              <span className={styles.breakAfterEachWord}>{t('Home.Stats.Experience')}</span>
            </div>
            <div>
              <span className={styles.breakAfterEachWord}>+10</span>
              <span className={styles.breakAfterEachWord}>{t('Home.Stats.Projects')}</span>
            </div>
            <div>
              <span className={styles.breakAfterEachWord}>+15</span>
              <span className={styles.breakAfterEachWord}>{t('Home.Stats.Technologies')}</span>
            </div>
          </div>
        </div>

        <div className={styles.body}>
          <p>{t('Home.Body.At')} <a href="https://tec.mx/en" target="_blank" className={styles.link}>Tecnologico de Monterrey&#8599;</a> {t('Home.Body.University')}. {t('Home.Body.Looking')} <span className={styles.italic}>{t('Home.Body.Part-Time')}</span> {t('Home.Body.Or')} <span className={styles.italic}>{t('Home.Body.Full-Time')}</span> <span className={`${styles.italic} ${styles.bold}`}>Web </span>&#40;<span className={styles.bold}>Front-End</span>, <span className={styles.bold}>Back-End</span> {t('Home.Body.Or')} <span className={styles.bold}>Full-Stack</span>&#41;, <span className={`${styles.italic} ${styles.bold}`}>Data Science</span>, <span className={`${styles.italic} ${styles.bold}`}>Mobile </span>&#40;<span className={styles.bold}>Android</span>, <span className={styles.bold}>iOS</span> {t('Home.Body.Or')} <span className={styles.bold}>Hybrid</span>&#41;, <span className={`${styles.italic} ${styles.bold}`}>Networking</span>, <span className={`${styles.italic} ${styles.bold}`}>DevOps</span> {t('Home.Body.Any')} <span className={`${styles.italic} ${styles.bold}`}>IT</span> {t('Home.Body.Opportunity')}.</p>
          <div className={styles.buttonsCtaContainer}>
            <a href="https://drive.google.com/file/d/1njTFGZCH0N8A3AmNbSSXfdo-4RofscqK/view?usp=sharing" target="_blank" className={styles.btnAux}>{t('Home.Body.cta.btnAux')}</a>
            <a href="#contact" className={styles.btn}>{t('Home.Body.cta.btn')}</a>
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
            <a href="https://www.linkedin.com/in/elviro-dominguez-soriano" target="_blank" rel="noreferrer" data-tooltip-id="global-tooltip" data-tooltip-content={t("Home.Links.linkedin")}>
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
            <a href="https://github.com/elvisscochito" target="_blank" rel="noreferrer" data-tooltip-id="global-tooltip" data-tooltip-content={t("Home.Links.github")}>
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
          </div>
          <div className={styles.workStatusContainer}>
            <span className={styles.workStatus}>{t('Home.workStatusContainer.open')}<FontAwesomeIcon icon={faCode} /></span>
            {/* <div className={styles.workTypeContainer}> */}
            <span className={`${styles.workType} ${styles.first}`}>{t('Home.workStatusContainer.Hybrid')} <FontAwesomeIcon icon={faBolt} /></span>
            <span className={`${styles.workType} ${styles.second}`}>{t('Home.workStatusContainer.Remote')} <FontAwesomeIcon icon={faLaptop} /></span>
            <span className={`${styles.workType} ${styles.third}`}>{t('Home.workStatusContainer.OnSite')} <FontAwesomeIcon icon={faMapPin} /></span>
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
            <span className={styles.breakAfterEachWord}>+1 {t('Home.Stats.Years')}</span>
            <span className={styles.breakAfterEachWord}>{t('Home.Stats.Experience')}</span>
          </div>
          <div>
            <span className={styles.breakAfterEachWord}>+10</span>
            <span className={styles.breakAfterEachWord}>{t('Home.Stats.Projects')}</span>
          </div>
          <div>
            <span className={styles.breakAfterEachWord}>+15</span>
            <span className={styles.breakAfterEachWord}>{t('Home.Stats.Technologies')}</span>
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
