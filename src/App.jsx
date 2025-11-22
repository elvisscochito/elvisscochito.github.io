import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import './App.css'
import About from './components/About'
import Aside from './components/Aside'
import BackToTop from './components/BackToTop'
import CompaniesSlider from './components/CompaniesSlider'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import Home from './components/Home'
import HonorsAndAwards from './components/HonorsAndAwards'
import Languages from './components/Languages'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import QuickContact from './components/QuickContact'
import ScrollProgressBar from './components/ScrollProgressBar'
import Skills from './components/Skills'
import SocialPath from './components/SocialPath'
import SocialProof from './components/SocialProof'
import SoftSkills from './components/SoftSkills'
import WorkExperience from './components/WorkExperience'
import styles from './styles/Tooltip.module.css'

function App() {
  return (
    <>
      <ScrollProgressBar />
      <CustomCursor />
      <Navbar />
      <Aside />
      {/* <main> */}
      <Home />
      <CompaniesSlider />
      <SocialPath />
      <About />
      <HonorsAndAwards />
      <WorkExperience />
      <SoftSkills />
      <Skills />
      <Languages />
      <Projects />
      <SocialProof />
      <Contact />
      <QuickContact />
      {/* Global Tooltip for cards and other elements that use data-tooltip-id="global-tooltip" */}
      {/* Add a stable global class name so we can hide/show the tooltip with a simple body class when cards flip */}
      {/* <Tooltip id="global-tooltip" place="top" className={styles.tooltip} /> */}
      <Tooltip id="global-tooltip" place="top" className={`global-tooltip ${styles.tooltip}`} />
      {/* </main> */}
      <BackToTop />
      <Footer />
    </>
  )
}

export default App
