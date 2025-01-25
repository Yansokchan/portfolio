import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skills.jsx";
import TopBtn from "./components/TopBtn.jsx";
import Welcome from "./components/Welcome.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Welcome />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
      <TopBtn />
    </>
  );
}

export default App;
