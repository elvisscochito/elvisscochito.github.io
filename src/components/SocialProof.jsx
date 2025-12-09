import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import misael from '../assets/misael.jpeg';
import styles from '../styles/SocialProof.module.css';
import SocialProofCard from './SocialProofCard';

const SocialProof = () => {
  const { t, i18n } = useTranslation("global");

  const buildProofs = (tfn) => [
    {
      id: 1,
      profile: misael,
      linkedin: 'https://www.linkedin.com/in/misael-delgado/',
      name: 'Misael Delgado',
      position: tfn('SocialProof.proofsList.p1.position'),
      comment: tfn('SocialProof.proofsList.p1.comment')
    }/* ,
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
