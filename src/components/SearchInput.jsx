/* import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; */
import styles from '../styles/SearchInput.module.css';
/* import { useState } from 'react'; */

const SECTIONS_MAP = {
  "home": "#home",
  "about": "#about",
  "honors and awards": "#honors-and-awards",
  "work experience": "#work-experience",
  "soft skills": "#soft-skills",
  "skills": "#skills",
  "languages": "#languages",
  "licenses and certifications": "#licenses-and-certifications",
  "publications": "#publications",
  "activities and societies": "#activities-and-societies",
  "hobbies and interests": "#hobbies-and-interests",
  "projects": "#projects",
  "social proof": "#social-proof",
  "contact": "#contact",
  "quick contact": "#quick-contact",
  "faqs": "#faqs",
  /* "language": "Language",
  "appearance": "Appearance", */
  /* "privacy": "Privacy",
  "notifications": "Notifications",
  "account": "Account",
  "security": "Security",
  "accessibility": "Accessibility",
  "shortcuts": "Shortcuts" */
}

const SearchInput = ({ onSelect }) => {
  /* const [value, setValue] = useState(''); */

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const sectionHash = SECTIONS_MAP[inputValue];

    if (!sectionHash) return;

    /* navigation */
    window.location.hash = sectionHash;

    /* close modal */
    onSelect?.();

    /* clear input */
    e.target.value = '';

    /* if (hash) {
      const sectionElement = document.querySelector(hash);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    } */
  }

  /* const handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const datalist = document.getElementById("search-suggestions");
    datalist.innerHTML = '';

    if (inputValue.length === 0) {
      return;
    }

    Object.keys(SECTION_MAP).forEach((key) => {
      if (key.includes(inputValue)) {
        const option = document.createElement("option");
        option.value = key;
        datalist.appendChild(option);
      }
    });
  };

  const handleInputSelect = (e) => {
    const selectedValue = e.target.value.toLowerCase();
    if (SECTION_MAP[selectedValue]) {
      const sectionId = SECTION_MAP[selectedValue];
      const sectionElement = document.querySelector(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }; */

  return (
    <>
      {/* <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#ffffff', marginRight: '8px' }} /> */}
      <input type="text" id="search-input" className={styles.searchInput} placeholder="For sections within page... " onChange={handleChange} aria-label="Search sections" list="search-suggestions" />
      <datalist id="search-suggestions">
        <option value="Home" />
        <option value="About" />
        <option value="Honors and Awards" />
        <option value="Work Experience" />
        <option value="Soft Skills" />
        <option value="Skills" />
        <option value="Languages" />
        <option value="Licenses and Certifications" />
        <option value="Publications" />
        <option value="Activities and Societies" />
        <option value="Hobbies and Interests" />
        <option value="Projects" />
        <option value="Social Proof" />
        <option value="Contact" />
        <option value="Quick Contact" />
        <option value="FAQs" />
        {/* <option value="Language" />
        <option value="Appearance" /> */}
        {/* <option value="Privacy" />
        <option value="Notifications" />
        <option value="Account" />
        <option value="Security" />
        <option value="Accessibility" />
        <option value="Shortcuts" /> */}
      </datalist>
    </>
  );
};

export default SearchInput;
