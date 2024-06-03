import './App.css'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <Navbar />
      <section id='home'>
        <div className="homeContainer">
          <h2 className="homeHeading">Home</h2>
          <p className="homeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam eget est nec nunc ultrices ultricies. Proin nec mi nec turpis accumsan tincidunt. Nulla facilisi. Nullam ac mi nec nunc ultrices ultricies. Proin nec mi nec turpis accumsan tincidunt. Nulla facilisi.</p>
        </div>
      </section>
      <section id="about">
        <div className="aboutContainer">
          <h2 className="aboutHeading">About Us</h2>
          <p className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam eget est nec nunc ultrices ultricies. Proin nec mi nec turpis accumsan tincidunt. Nulla facilisi. Nullam ac mi nec nunc ultrices ultricies. Proin nec mi nec turpis accumsan tincidunt. Nulla facilisi.</p>
        </div>
      </section>
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
