import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/QuickContact.module.css';
import Modal from './Modal';

const QuickContact = () => {
  const { t } = useTranslation("global");
  const modalRef = useRef(null);
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    contactInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  useEffect(() => {
    if (formRef.current) {
      setIsFormValid(formRef.current.checkValidity());
    }
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const contactInfo = formData.contactInfo.trim();

    /* if (!contactInfo) {
      alert('Please enter your email or phone number.');
      return;
    } */

    const postWhatsAppQuickMessage = async () => {
      try {
        const response = await fetch("/api/postWhatsAppQuickMessage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ contactInfo: contactInfo })
        });

        if (response.ok) {
          /* alert('Your quick contact info has been sent successfully! I will get in touch with you soon.'); */

          modalRef.current?.open(
            t("QuickContact.modal.title"),
            t("QuickContact.modal.message")
          );
          /* const data = await response.json();
          console.log('Success:', data); */
          setFormData({ contactInfo: '' });

          /* close modal automatically after 3 seconds */
          setTimeout(() => {
            modalRef.current?.close();
          }, 3000);
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to send quick contact info.');
        }
      } catch (error) {
        console.error('Error:', error);
        /* throw error; */
        alert('There was an error sending your quick contact info. Please try again later.');
        /* setIsButtonDisabled(false); */
        /* modalRef.current?.open(
          'Error',
          'There was an error sending your quick contact info. Please try again later.'
        ); */
      } finally {
        setIsLoading(false);
        /* setIsButtonDisabled(true); */
      }
    }

    postWhatsAppQuickMessage();

    /* console.log('Quick Contact Info Submitted:', formData.contactInfo); */
  }

  return (
    <section id='quick-contact' className={styles.quickContact}>
      <header className={styles.header}>
        <h2 className={styles.quickContactHeading}>{/* Do you feel lazy?  */} {t("QuickContact.heading")}</h2>
        <span className={styles.quickContactText}>{t("QuickContact.subheading")}{/*  just type your email or phone number and I will contact you. */}</span>
      </header>
      <form className={styles.quickContactForm} onSubmit={handleSubmit} ref={formRef}>
        <fieldset className={styles.fieldset}>
          <label htmlFor="quickContactInfo" className={styles.label}>{t("QuickContact.form.label")}</label>
          <input type="text" id="quickContactInfo" name="contactInfo" className={styles.input} placeholder={t("QuickContact.form.placeholder")} value={formData.contactInfo} onChange={handleChange} required />
        </fieldset>

        <Modal ref={modalRef} />

        <button type="submit" disabled={!isFormValid || isLoading} className={styles.submitButton}
          {...(!isFormValid && {
            "data-tooltip-id": "global-tooltip",
            "data-tooltip-content": t("QuickContact.form.btnDisabledTooltip")
          })}>
          {
            isLoading ? (
              <>
                {t("QuickContact.form.sending")}
                <span className={styles.spinner} aria-label={t("QuickContact.form.sending")} />
              </>
            ) : (
              t("QuickContact.form.btn")
            )
          }
          {/* <span className={`${styles.icon} ${styles.iconDisabled}`} aria-hidden="true">✉️</span> */}
        </button>
      </form>
    </section>
  );
}

export default QuickContact;
