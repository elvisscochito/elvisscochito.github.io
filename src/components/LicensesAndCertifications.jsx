import { faBuilding, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import coursera from '../assets/coursera.png';
import mongodb from '../assets/mongodb.svg';
import scrumstudy from '../assets/scrum.png';
import styles from '../styles/LicensesAndCertifications.module.css';

const LicensesAndCertifications = () => {
  const [certifications, setCertifications] = useState([
    {
      id: 1,
      title: 'Introduction to HTML5 by University of Michigan',
      issuer: 'Coursera',
      issueDate: 'December 2021',
      credentialUrl: 'https://coursera.org/verify/8AYXPXAXPBMK',
      logo: coursera
    },
    {
      id: 2,
      title: 'Scrum Fundamentals Certified (SFC)',
      issuer: 'SCRUMstudy - Accreditation Body for Scrum and Agile',
      issueDate: 'March 2022',
      credentialUrl: 'https://www.linkedin.com/posts/elviro-dominguez-soriano_scrum-fundamentals-certified-activity-6944379317996990464-ElsP?utm_source=linkedin_share&utm_medium=member_desktop_web',
      logo: scrumstudy
    },
    {
      id: 3,
      title: 'Introduction to MongoDB',
      issuer: 'MongoDB University',
      issueDate: 'June 2023',
      credentialUrl: 'https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/0812db4f-05d8-4ce6-8703-235037f5a203-elviro-dominguez-soriano-a45b198c-461f-4878-a995-9b4bd9377583-certificate.pdf',
      logo: mongodb
    }
  ]);
  return (
    <section id='licenses-and-certifications' className={styles.LicensesAndCertifications}>
      <header className={styles.header}>
        <h2 className={styles.heading}>Licenses and Certifications</h2>
        <span>Here are some of my professional licenses and certifications.</span>
      </header>
      <ul className={styles.certificationsList}>
        {
          certifications.map((certification, index) => (
            <li key={index} className={styles.certificationItem}>
              <img src={certification.logo} alt={`${certification.issuer} logo`} className={styles.certificationLogo} />
              <h3 className={styles.certificationTitle}>{certification.title}</h3>
              <span className={styles.issuingOrganization}><FontAwesomeIcon icon={faBuilding} className={styles.icon} />Issuer: {certification.issuer}</span>
              <span className={styles.issueDate}><FontAwesomeIcon icon={faCalendar} className={styles.icon} />Issued: {certification.issueDate}</span>
              <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>View Credential &#8599;</a>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default LicensesAndCertifications;
