// import Container from "./Components/Container/Container";/
import "./App.css";
// import SideBar from "./Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/About Me/AboutMe";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import ContactMe from "./Components/Contact Me/ContactMe";
// import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      {/* <SideBar /> */}
      {/* <Container /> */}
      <Home />
      <AboutMe />
      <Education />
      <Experience />
      <Projects />
      {/* <Testimonials /> */}
      <ContactMe />
    </div>
  );
}

export default App;
