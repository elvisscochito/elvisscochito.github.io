import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import './App.css'
import About from './components/About'
import Aside from './components/Aside'
import Contact from './components/Contact'
/* import CustomCursor from './components/CustomCursor' */
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
/* import Skills from './components/Skills' */
import SocialPath from './components/SocialPath'
/* import SoftSkills from './components/SoftSkills' */
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import ScrollProgressBar from './components/ScrollProgressBar'
import styles from './styles/Tooltip.module.css'

function App() {
  return (
    <>
      <ScrollProgressBar />
      {/* <CustomCursor /> */}
      <Navbar />
      <Aside />
      {/* <main> */}
      <Home />
      <SocialPath />
      <About />
      {/* <SoftSkills /> */}
      {/* <Skills /> */}
      <Projects />
      <Contact />
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
