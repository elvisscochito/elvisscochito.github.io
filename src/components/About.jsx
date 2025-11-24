/* import { faClone } from '@fortawesome/free-regular-svg-icons'; */
import { faArrowDown /* , faArrowAltCircleDown */, faCheck, faClone, faEnvelope, faGraduationCap, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import me from '../assets/profile.jpg';
import styles from '../styles/About.module.css';
import Services from './Services.jsx';
import TopSkills from './TopSkills.jsx';

const About = () => {
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
  }

  return (
    <section id="about" className={styles.about}>
      <header className={styles.header}>
        <h2 className={styles.h2}>What about me?</h2>
        <span>Here&apos;s a little more information about me.</span>
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
              <span className={styles.row}>
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
            </div>
          </div>

          <div className={styles.location}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
            <div className={styles.locationInfo}>
              <span>Location</span>
              <span>I&apos;m from:</span>
              <a href="https://maps.app.goo.gl/xTnkPChgPfQgdtzN8" target="_blank" rel="noopener noreferrer">Cuernavaca, Morelos, México&#8599;{/*  (the city of the Eternal Spring) */}</a>
              <span className={styles.bold}>Currently living in:</span>
              <a href="https://maps.app.goo.gl/xTnkPChgPfQgdtzN8" target="_blank" rel="noopener noreferrer">Cuernavaca, Morelos, México&#8599;</a>
            </div>
          </div>

          <div className={styles.email}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <div className={styles.emailInfo}>
              <span>Email</span>
              <span>You can send me an email at:</span>
              <span className={styles.row}>
                <a href="mailto:contact@elvirodominguez.com?subject=Contacting%20for%20opportunity&body=Hello,%20Elviro:" className={styles.link} ref={emailRef}>
                  contact@elvirodominguez.com
                  {/* <FontAwesomeIcon icon={faClone} className={styles.iconAux} /> */}
                </a>
                {
                  copiedText.email ?
                    <FontAwesomeIcon icon={faCheck} className={styles.copied} />
                    :
                    <FontAwesomeIcon icon={faClone} className={styles.copy} onClick={() => handleCopyToClipboard(text.email, 'email')} />
                }
              </span>
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
      <TopSkills />
      <Services />
      <a href="#contact" className={styles.btn}>Contact me <FontAwesomeIcon icon={faArrowDown} className={styles.icon} /></a>
    </section >
  )
}

export default About
