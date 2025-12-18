const LicensesAndCertificationsCard = ({ certification, t, styles, FontAwesomeIcon, faBuilding, faCalendar }) => {
  return (
    <>
      <img src={certification.logo} alt={`${certification.issuer} logo`} className={styles.certificationLogo} />
      <h3 className={styles.certificationTitle}>{certification.title}</h3>
      <span className={styles.issuingOrganization}><FontAwesomeIcon icon={faBuilding} className={styles.icon} /> {t("LicensesAndCertifications.issuer")} {certification.issuer}</span>
      <span className={styles.issueDate}><FontAwesomeIcon icon={faCalendar} className={styles.icon} />{t("LicensesAndCertifications.issued")} {certification.issueDate}</span>
      <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>{t("LicensesAndCertifications.btn")} &#8599;</a>
    </>
  );
};

export default LicensesAndCertificationsCard;
