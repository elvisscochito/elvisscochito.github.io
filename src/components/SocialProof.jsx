import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import facundo from '../assets/facundo.webp';
import misael from '../assets/misael.webp';
import styles from '../styles/SocialProof.module.css';
import SocialProofCard from './SocialProofCard';

const SocialProof = () => {
  const { t, i18n } = useTranslation("global");

  const buildProofs = (tfn) => [
    {
      id: 1,
      profile: facundo,
      linkedin: 'https://www.linkedin.com/in/facundo-prieto/',
      name: tfn('SocialProof.proofsList.p1.name'),
      position: tfn('SocialProof.proofsList.p1.position'),
      date: tfn('SocialProof.proofsList.p1.date'),
      comment: tfn('SocialProof.proofsList.p1.comment'),
      link: "https://www.linkedin.com/services/page/94049531a961b25782/",
      type: tfn('SocialProof.proofsList.p1.type')
    },
    {
      id: 2,
      profile: misael,
      linkedin: 'https://www.linkedin.com/in/misael-delgado/',
      name: tfn('SocialProof.proofsList.p2.name'),
      date: tfn('SocialProof.proofsList.p2.date'),
      position: tfn('SocialProof.proofsList.p2.position'),
      comment: tfn('SocialProof.proofsList.p2.comment'),
      link: "https://www.linkedin.com/in/elviro-dominguez-soriano/details/recommendations/",
      type: tfn('SocialProof.proofsList.p2.type')
    },
    /* ,
    {
      id: 2,
      name: 'Mike Johnson',
      position: 'Project Manager at WebSolutions',
      comment: 'Working with Elvis has been a pleasure. His skills and dedication are unmatched.'
    },
    {
      id: 3,
      name: 'Jane Smith',
      position: 'CTO at TechCorp',
      comment: 'Elvis is an exceptional developer who consistently delivers high-quality work.'
    } */
  ];

  const [proofs, setProofs] = useState(() => buildProofs(t));

  useEffect(() => {
    setProofs(buildProofs(t));
  }, [i18n.language, t]);

  return (
    <section id='social-proof' className={styles.socialProof}>
      <header className={styles.header}>
        <h2 className={styles.socialProofHeading}>{t("SocialProof.heading")}</h2>
        <span>{t("SocialProof.subheading")}{/* What others say about me. */}</span>
      </header>
      <div className={styles.proofsContainer}>
        {
          proofs.map(proof => (
            <SocialProofCard
              key={proof.id}
              profile={proof.profile}
              linkedin={proof.linkedin}
              name={proof.name}
              position={proof.position}
              comment={proof.comment}
              link={proof.link}
              type={proof.type}
              tooltipText={t("SocialProof.btn")}
            />
          ))
        }
      </div>
      {/* Add testimonials or social proof content here */}
    </section>
  );
};

export default SocialProof;
