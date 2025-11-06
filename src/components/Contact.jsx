import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeading, faMessage, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormData] = useState({
    subject: 'Contacting for Job Opportunity (via portfolio)',
    name: '',
    email: '',
    message: 'I want to get in touch with you regarding a job opportunity...',
  });

  const toggleStatus = () => {
    setIsActive(!isActive);
  }

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { subject, name, /* email, */ message } = formData;
    /* const whatsappNumber = '+527771395795'; */

    if (isActive) {
      const whatsappMessage = `_Subject_: *${subject}*.\n\nHello, Elviro.\n\nMy name is ${name}. ${message}`;

      const whatsappURL = `https://wa.me/+527771395795?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappURL, '_blank');
    } else if (isChecked) {
      alert('Note: Desktop email applications may not support pre-filled body content. Please ensure your email client is configured correctly.');
      const mailtoLink = `mailto:contact@elvirodominguez.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello, Elviro:\n\nMy name is ${name}. ${message}`)}`;
      window.open(mailtoLink, '_blank');
    } else {
      alert('Note: Web email clients may not support pre-filled body content. Please ensure your email client is configured correctly.');

      const postEmail = async () => {
        try {
          const response = await fetch("https://formsubmit.co/4683a429fc79af4ffa0443e66e78b552", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          });

          if (response.ok) {
            alert('Message sent successfully!');
            setFormData({
              subject: 'Contacting for Job Opportunity (via portfolio)',
              name: '',
              email: '',
              message: 'I want to get in touch with you regarding a job opportunity...',
            });
          } else {
            alert('Error sending message.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Error sending message.');
        }
      };

      postEmail();
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <header className={styles.header}>
        <h2 className={styles.contactHeading}>Let&apos;s build something together.</h2>
        <span>Feel free to reach me out for job opportunities!</span>
      </header>
      <form className={styles.contactForm} /* action="https://formspree.io/f/xgvpgydd" method="POST" */ onSubmit={handleSubmit}>

        <fieldset className={styles.fieldset}>
          {/* <legend className={styles.legend}>Contact Method</legend> */}
          <label htmlFor="status" className={styles.statusLabelName}>Send through {isActive ? 'WhatsApp' : 'Email'}:&nbsp;
            <input type="checkbox" id="status" name="status" onChange={toggleStatus} checked={isActive} className={styles.statusCheckbox} />
            <label htmlFor="status" className={styles.statusLabel}></label>
          </label>

          {
            !isActive && (

              <label htmlFor="client" className={styles.checkboxLabelName}>({isChecked ? 'Desktop App' : 'Web Client'})&nbsp;
                <input type="checkbox" id="client" name="client" onChange={toggleCheckbox} checked={isChecked} className={styles.checkbox} />
                <label htmlFor="client" className={styles.checkboxLabel}></label>
              </label>
            )
          }
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="subject">                <FontAwesomeIcon icon={faHeading} className={styles.icon} />&nbsp;{isActive ? 'Title' : 'Subject'}:</label>
          <input type="text" id="subject" name="subject" required placeholder='Type Your Custom Subject Here, e.g. Job Inquiry' value={formData.subject} onChange={handleChange} />
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="name"> <FontAwesomeIcon icon={faUser} className={styles.icon} />&nbsp;Name:</label>
          <input type="text" id="name" name="name" required placeholder='Type Your Name Here, e.g. John Doe' onChange={handleChange} autoComplete />
        </fieldset>

        {
          !isActive && (
            <fieldset className={styles.fieldset}>
              <label htmlFor="email"> <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />&nbsp;From Email:</label>
              <input type="email" id="email" name="email" required placeholder='Type Your Email Address Here, e.g. example@email.com' onChange={handleChange} autoComplete />
            </fieldset>
          )
        }

        <fieldset className={styles.fieldset}>
          <label htmlFor="message"> <FontAwesomeIcon icon={faMessage} className={styles.icon} />&nbsp; {isActive ? 'Message' : 'Body Content'}:</label>
          <textarea id="message" name="message" required placeholder={isActive ? 'Type Your WhatsApp Message Here...' : 'Type Your Email Message Here...'} onChange={handleChange} value={formData.message}></textarea>
        </fieldset>

        {/* <fieldset className={styles.fieldset}>
          <label htmlFor='app'><input type='radio' id='app' name='contactMethod' value='app' className={styles.radioApp} />Desktop Application</label>

          <label htmlFor='web'><input type='radio' id='web' name='contactMethod' value='web' className={styles.radioWeb} />Web Client</label>
        </fieldset> */}

        <button type="submit" className={`${styles.submitButton} ${isActive ? styles.whatsapp : styles.email}`}>Send {isActive ? (
          <>
            WhatsApp
            <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
          </>
        ) : (
          <>
            Email
            <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
          </>
        )}
        </button>
      </form>
    </section>
  )
}

export default Contact
