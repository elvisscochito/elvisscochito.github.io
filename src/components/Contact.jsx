import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeading, faMessage, faPaperPlane, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const formRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedWhatsapp, setIsCheckedWhatsapp] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [formData, setFormData] = useState({
    subject: 'Contacting for Job Opportunity (via portfolio)',
    name: '',
    email: '',
    phone: '',
    message: 'I want to get in touch with you regarding a job opportunity...',
  });

  const toggleStatus = () => {
    setIsActive(!isActive);
  }

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  }

  const toggleChecked = () => {
    setIsCheckedWhatsapp(!isCheckedWhatsapp);
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

      if (!isCheckedWhatsapp) {
        const postWhatsApp = async () => {
          try {
            const response = await fetch("/api/postWhatsApp", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(formData)

            })/* () */;

            if (response.ok) {
              alert('Message sent successfully via WhatsApp API!');
              setFormData({
                subject: 'Contacting for job Opportunity (via portfolio)',
                name: '',
                email: '',
                phone: '',
                message: 'I want to get in touch with you regarding a job opportunity...',
              });
            }
          } catch (error) {
            console.error('Error:', error);
            alert('Error sending message via WhatsApp API.');
          }
        }
        postWhatsApp();
      } else {
        const whatsappURL = `https://wa.me/+527771395795?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, '_blank');
      }
    } else if (isChecked) {
      alert('Note: Desktop email applications may not support pre-filled body content. Please ensure your email client is configured correctly.');
      const mailtoLink = `mailto:contact@elvirodominguez.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello, Elviro:\n\nMy name is ${name}. ${message}`)}`;
      window.open(mailtoLink, '_blank');
    } else {
      alert('Note: Web email clients may not support pre-filled body content. Please ensure your email client is configured correctly.');

      const postEmail = async () => {
        try {
          const response = await fetch("/api/postEmail", {
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
              phone: '',
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

  const autoCapitalizeWords = (str) => {
    const { name, value } = str.target;
    const capitalizedValue = value.replace(/\b\w/g, char => char.toUpperCase());
    setFormData(prev => ({ ...prev, [name]: capitalizedValue }));
  }

  const allowOnlyNumbers = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/\D+/g, '');
    setFormData(prev => ({ ...prev, [name]: numericValue }));
  }

  const autoLowercaseCharacters = (e) => {
    const { name, value } = e.target;
    const lowercasedValue = value.toLowerCase();
    setFormData(prev => ({ ...prev, [name]: lowercasedValue }));
  }

  return (
    <section id="contact" className={styles.contact}>
      <header className={styles.header}>
        <h2 className={styles.contactHeading}>Let&apos;s build something together.</h2>
        <span>Feel free to reach me out for job opportunities!</span>
      </header>
      <form className={styles.contactForm} /* action="https://formspree.io/f/xgvpgydd" method="POST" */ onSubmit={handleSubmit} ref={formRef} onChange={() => setIsButtonDisabled(!formRef.current?.checkValidity())}>

        <fieldset className={styles.fieldset}>
          {/* <legend className={styles.legend}>Contact Method</legend> */}
          <label htmlFor="status" className={styles.statusLabelName}>Send through {isActive ? 'WhatsApp' : 'Email'}:&nbsp;
            <input type="checkbox" id="status" name="status" onChange={toggleStatus} checked={isActive} className={styles.statusCheckbox} />
            <label htmlFor="status" className={styles.statusLabel}></label>
          </label>

          {
            !isActive ? (
              <label htmlFor="client" className={styles.checkboxLabelName}>({isChecked ? 'Desktop App' : 'Web Client'})&nbsp;
                <input type="checkbox" id="client" name="client" onChange={toggleCheckbox} checked={isChecked} className={styles.checkbox} />
                <label htmlFor="client" className={styles.checkboxLabel}></label>
              </label>
            ) : (
              <label htmlFor="client" className={styles.checkboxLabelName}>({isCheckedWhatsapp ? 'URL Link' : 'Cloud API'})&nbsp;
                <input type="checkbox" id="client" name="client" onChange={toggleChecked} checked={isCheckedWhatsapp} className={styles.checkbox} />
                <label htmlFor="client" className={`${styles.checkboxLabel} ${styles.whatsapp}`}></label>
              </label>
            )
          }
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="subject">                <FontAwesomeIcon icon={faHeading} className={styles.icon} />&nbsp;{isActive ? 'Title' : 'Subject'}:</label>
          <input type="text" id="subject" name="subject" placeholder='Type Your Custom Subject Here, e.g. Job Inquiry' /* title='Enter the subject/title of your email/message' */ value={formData.subject} onChange={handleChange} required />
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="name"> <FontAwesomeIcon icon={faUser} className={styles.icon} />&nbsp;Name:</label>
          <input type="text" id="name" name="name" placeholder='Type Your Name Here, e.g. John Doe' /* title='Enter your full name' */ value={formData.name} /* onChange={handleChange} */ onInput={autoCapitalizeWords} minLength={3} maxLength={32} /* pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$" */ /* onInvalid={e => e.target.setCustomValidity('Please enter a valid name.')} */ autoComplete='name' required />
        </fieldset>

        {
          !isActive && (
            <>
              <fieldset className={styles.fieldset}>
                <label htmlFor="email"> <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />&nbsp;From Email:</label>
                <input type="email" id="email" name="email" placeholder='Type Your Email Address Here, e.g. example@email.com' /* title='Enter your email address' */ value={formData.email} /* onChange={handleChange} */ onInput={autoLowercaseCharacters} pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" /* onInvalid={e => e.target.setCustomValidity('Please enter a valid email address.')} */ autoComplete='email' required />
              </fieldset>
            </>
          )
        }

        <fieldset className={styles.fieldset}>
          <label htmlFor="phone"> <FontAwesomeIcon icon={faPhone} className={styles.icon} />&nbsp; Phone:</label>
          {/* verify pattern */}
          <input type="tel" id="phone" name="phone" placeholder='e.g. +1234567890' /* title='Enter your phone number' */ value={formData.phone} /* onChange={handleChange} */ onInput={allowOnlyNumbers} minLength={4} maxLength={16} pattern='(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?' /* onInvalid={e => e.target.setCustomValidity('Please enter a valid phone number.')} */ autoComplete='tel' />
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="message"> <FontAwesomeIcon icon={faMessage} className={styles.icon} />&nbsp; {isActive ? 'Message' : 'Body Content'}:</label>
          <textarea id="message" name="message" placeholder={isActive ? 'Type Your WhatsApp Message Here...' : 'Type Your Email Message Here...'} onChange={handleChange} value={formData.message} required></textarea>
        </fieldset>

        {/* <fieldset className={styles.fieldset}>
          <label htmlFor='app'><input type='radio' id='app' name='contactMethod' value='app' className={styles.radioApp} />Desktop Application</label>

          <label htmlFor='web'><input type='radio' id='web' name='contactMethod' value='web' className={styles.radioWeb} />Web Client</label>
        </fieldset> */}

        <button type="submit" disabled={isButtonDisabled} /* title={isButtonDisabled ? "Please enter fields to enabled send" : undefined} */ className={`${styles.submitButton} ${isActive ? styles.whatsapp : styles.email}`}>Send {isActive ? (
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
