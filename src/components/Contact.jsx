import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeading, faMessage, faPaperPlane, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Contact.module.css';
import Modal from './Modal';

const Contact = () => {
  const { t } = useTranslation("global");
  const modalRef = useRef(null);
  const formRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedWhatsapp, setIsCheckedWhatsapp] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [formData, setFormData] = useState({
    subject: t('Contact.formData.subject'),
    name: '',
    email: '',
    phone: '',
    message: t('Contact.formData.message'),
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
              /* alert('Message sent successfully via WhatsApp API!'); */

              modalRef.current?.open(
                t('Contact.modalWhatsApp.title'),
                t('Contact.modalWhatsApp.message')
              );

              setFormData({
                subject: t('Contact.formData.subject'),
                name: '',
                email: '',
                phone: '',
                message: t('Contact.formData.message'),
              });
              /* close modal automatically after 3 seconds */
              setTimeout(() => {
                modalRef.current?.close();
              }, 3000);
            }
          } catch (error) {
            console.error('Error:', error);
            alert(t('Contact.alertErrorWhatsapp'));
            /* modalRef.current?.open(
              'Error',
              'There was an error sending your message via WhatsApp API. Please try again later.'
            ); */
          }
        }
        postWhatsApp();
      } else {
        const whatsappURL = `https://wa.me/+527771395795?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, '_blank');
      }
    } else if (isChecked) {
      alert(t('Contact.alertEmailDesktop'));

      /* modalRef.current?.open(
        'Note',
        'Desktop email applications may not support pre-filled body content. Please ensure your email client is configured correctly.'
      ); */

      const mailtoLink = `mailto:contact@elvirodominguez.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello, Elviro:\n\nMy name is ${name}. ${message}`)}`;
      window.open(mailtoLink, '_blank');
    } else {
      /* alert(t('Contact.alertEmailWeb')); */

      /* modalRef.current?.open(
        t('Contact.note'),
        t('Contact.alertEmailDesktop')
      );
      setTimeout(() => {
        modalRef.current?.close();
      }, 3000); */

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
            /* alert('Message sent successfully!'); */

            modalRef.current?.open(
              t('Contact.modalEmail.title'),
              t('Contact.modalEmail.message')
            );

            setFormData({
              subject: t('Contact.formData.subject'),
              name: '',
              email: '',
              phone: '',
              message: t('Contact.formData.message'),
            });

            /* close modal automatically after 3 seconds */
            setTimeout(() => {
              modalRef.current?.close();
            }, 3000);
          } else {
            alert(t('Contact.alertErrorEmail'));
            /* modalRef.current?.open(
              'Error',
              'There was an error sending your message. Please try again later.'
            ); */
          }
        } catch (error) {
          console.error('Error:', error);
          alert(t('Contact.alertErrorEmail'));
          /* modalRef.current?.open(
            'Error',
            'There was an error sending your message. Please try again later.'
          ); */
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

  /* useEffect(() => {
    if (formRef.current) {
      setIsButtonDisabled(!formRef.current.checkValidity());
    }
  }, [isActive, formData]); */

  useEffect(() => {
    if (formRef.current) {
      setIsButtonDisabled(!formRef.current.checkValidity());
    }
  }, [isActive, formData]);

  return (
    <section id="contact" className={styles.contact}>
      <header className={styles.header}>
        <h2 className={styles.contactHeading}>{t('Contact.heading')}</h2>
        <span>{t('Contact.subheading')}</span>
      </header>
      <form className={styles.contactForm} /* action="https://formspree.io/f/xgvpgydd" method="POST" */ onSubmit={handleSubmit} ref={formRef} /* onChange={() => setIsButtonDisabled(!formRef.current?.checkValidity())} */>

        <fieldset className={styles.fieldset}>
          {/* <legend className={styles.legend}>Contact Method</legend> */}
          <label htmlFor="status" className={styles.statusLabelName}>{t('Contact.form.sendThrough')} {isActive ? 'WhatsApp' : 'Email'}:&nbsp;
            <input type="checkbox" id="status" name="status" onChange={toggleStatus} checked={isActive} className={styles.statusCheckbox} />
            <label htmlFor="status" className={styles.statusLabel}></label>
          </label>

          {
            !isActive ? (
              <label htmlFor="client" className={styles.checkboxLabelName}>({isChecked ? t('Contact.form.desktop') : t('Contact.form.web')})&nbsp;
                <input type="checkbox" id="client" name="client" onChange={toggleCheckbox} checked={isChecked} className={styles.checkbox} />
                <label htmlFor="client" className={styles.checkboxLabel}></label>
              </label>
            ) : (
              <label htmlFor="client" className={styles.checkboxLabelName}>({isCheckedWhatsapp ? t('Contact.form.url') : t('Contact.form.cloud')})&nbsp;
                <input type="checkbox" id="client" name="client" onChange={toggleChecked} checked={isCheckedWhatsapp} className={styles.checkbox} />
                <label htmlFor="client" className={`${styles.checkboxLabel} ${styles.whatsapp}`}></label>
              </label>
            )
          }
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="subject">                <FontAwesomeIcon icon={faHeading} className={styles.icon} />&nbsp;{isActive ? t('Contact.form.title') : t('Contact.form.subject')}:</label>
          <input type="text" id="subject" name="subject" placeholder={isActive ? t('Contact.form.titlePlaceholder') : t('Contact.form.subjectPlaceholder')} /* title='Enter the subject/title of your email/message' */ value={formData.subject} onChange={handleChange} required />
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="name"> <FontAwesomeIcon icon={faUser} className={styles.icon} />&nbsp;{t('Contact.form.name')}</label>
          <input type="text" id="name" name="name" placeholder={t('Contact.form.namePlaceholder')} /* title='Enter your full name' */ value={formData.name} /* onChange={handleChange} */ onInput={autoCapitalizeWords} minLength={3} maxLength={32} /* pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$" */ /* onInvalid={e => e.target.setCustomValidity('Please enter a valid name.')} */ autoComplete='name' required />
        </fieldset>

        {
          !isActive && (
            <>
              <fieldset className={styles.fieldset}>
                <label htmlFor="email"> <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />&nbsp;{t('Contact.form.email')}</label>
                <input type="email" id="email" name="email" placeholder={t('Contact.form.emailPlaceholder')} /* title='Enter your email address' */ value={formData.email} /* onChange={handleChange} */ onInput={autoLowercaseCharacters} pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" /* onInvalid={e => e.target.setCustomValidity('Please enter a valid email address.')} */ autoComplete='email' required />
              </fieldset>
            </>
          )
        }

        <fieldset className={styles.fieldset}>
          <label htmlFor="phone"> <FontAwesomeIcon icon={faPhone} className={styles.icon} />&nbsp; {t('Contact.form.phone')} {!isActive && '(optional)'}:</label>
          {/* verify pattern */}
          <input type="tel" id="phone" name="phone" placeholder={t('Contact.form.phonePlaceholder')} /* title='Enter your phone number' */ value={formData.phone} /* onChange={handleChange} */ onInput={allowOnlyNumbers} minLength={4} maxLength={16} pattern='(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?' /* onInvalid={e => e.target.setCustomValidity('Please enter a valid phone number.')} */ autoComplete='tel' required={isActive} />
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="message"> <FontAwesomeIcon icon={faMessage} className={styles.icon} />&nbsp; {isActive ? t('Contact.form.message') : t('Contact.form.bodyContent')}:</label>
          <textarea id="message" name="message" placeholder={isActive ? t('Contact.form.whatsappMessage') : t('Contact.form.emailMessage')} onChange={handleChange} value={formData.message} required></textarea>
        </fieldset>

        {/* <fieldset className={styles.fieldset}>
          <label htmlFor='app'><input type='radio' id='app' name='contactMethod' value='app' className={styles.radioApp} />Desktop Application</label>

          <label htmlFor='web'><input type='radio' id='web' name='contactMethod' value='web' className={styles.radioWeb} />Web Client</label>
        </fieldset> */}

        <Modal ref={modalRef} />

        <button type="submit" disabled={isButtonDisabled} /* title={isButtonDisabled ? "Please enter fields to enabled send" : undefined} */ className={`${styles.submitButton} ${isActive ? styles.whatsapp : styles.email}`}>{t('Contact.form.send')} {isActive ? (
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
