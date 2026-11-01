import Navbar from "./components/navbar";

import Hero from "./components/hero";

import "./App.css";
import Destination from "./components/destination";
import Packages from "./components/Packages";
import Contact from './components/Contact';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destination />
      <Packages />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
