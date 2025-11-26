import { useRef, useState } from 'react';
import styles from '../styles/QuickContact.module.css';
import Modal from './Modal';

const QuickContact = () => {
  const modalRef = useRef(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();

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
            'Message sent successfully',
            'I will reach out to you soon!'
          );
          /* const data = await response.json();
          console.log('Success:', data); */
          setFormData({ contactInfo: '' });

          /* close modal automatically after 3 seconds */
          setTimeout(() => {
            modalRef.current?.close();
          }, 3000);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your quick contact info. Please try again later.');
        /* modalRef.current?.open(
          'Error',
          'There was an error sending your quick contact info. Please try again later.'
        ); */
      }
    }

    postWhatsAppQuickMessage();

    /* console.log('Quick Contact Info Submitted:', formData.contactInfo); */
  }

  return (
    <section id='quick-contact' className={styles.quickContact}>
      <header className={styles.header}>
        <h2 className={styles.quickContactHeading}>{/* Do you feel lazy?  */}Quick {/* one */}two-step contact</h2>
        <span className={styles.quickContactText}>If you would like to get in touch but don't want to fill the previous form please send me your email or phone number and I will contact you.{/*  just type your email or phone number and I will contact you. */}</span>
      </header>
      <form className={styles.quickContactForm} onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <label htmlFor="quickContactInfo" className={styles.label}>Your Email or Phone Number:</label>
          <input type="text" id="quickContactInfo" name="contactInfo" className={styles.input} placeholder="Enter your email or phone number" value={formData.contactInfo} onChange={handleChange} />
        </fieldset>
        <Modal title="Message sent successfully" message="I will reach out to you soon!" ref={modalRef} />

        <button type="submit" className={styles.submitButton}>Send</button>
      </form>
    </section>
  );
}

export default QuickContact;
