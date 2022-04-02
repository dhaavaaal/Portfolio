// import Container from "./Components/Container/Container";/
import "./App.css";
// import AboutMe from "./Components/About Me/AboutMe";
// import Home from "./Components/Home/Home";
import SideBar from "./Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/About Me/AboutMe";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Testimonials from "./Components/Testimonials/Testimonials";
import ContactMe from "./Components/Contact Me/ContactMe";

function App() {
  return (
    <div className="App">
      <SideBar />
      {/* <Container /> */}
      <Home />
      <AboutMe />
      <Education />
      <Experience />
      <Projects />
      <Testimonials />
      <ContactMe />

      {/* <PermanentDrawerLeft /> */}
    </div>
  );
}

export default App;
