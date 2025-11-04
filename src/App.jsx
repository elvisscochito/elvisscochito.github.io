import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import './App.css'
import About from './components/About'
import Aside from './components/Aside'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SocialPath from './components/SocialPath'
import styles from './styles/Tooltip.module.css'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Aside />
      {/* <main> */}
      <Home />
      <SocialPath />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* Global Tooltip for cards and other elements that use data-tooltip-id="global-tooltip" */}
      <Tooltip id="global-tooltip" place="top" className={styles.tooltip} />
      {/* </main> */}
    </>
  )
}

export default App
