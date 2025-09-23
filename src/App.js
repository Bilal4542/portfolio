import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Projetcs from "./Components/Projects/Projetcs";
import Skills from "./Components/Skills/Skills";
// import Team from "./Components/Team/Team";

function App() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projetcs/>
      {/* <Team/> */}
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
