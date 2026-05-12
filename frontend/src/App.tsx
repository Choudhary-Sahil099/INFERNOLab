import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import Cursor from "./components/ui/Cursor.tsx";
import ParticleBackground from "./components/ui/ParticleBackground";

import Hero from "./sections/hero/Hero";
import Works from "./sections/Works";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="app">
      <Cursor />
      <ParticleBackground />
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Hero />
          <Skills />
          <Works />
          <Contact />
        </main>
        <Footer />

      </div>
    </div>
  );
}

export default App;