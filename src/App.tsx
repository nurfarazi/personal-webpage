import { useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import HomePage from './pages/HomePage';
import './App.css'

// Extracted particles options
const particlesOptions: ISourceOptions = {
  background: {
    color: {
      value: "#000000",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
        parallax: {
          enable: true,
          force: 10,
          smooth: 20
        }
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 300,
        duration: 1,
        factor: 30,
        speed: 1,
        maxSpeed: 20,
        easing: "ease-out-quad"
      },
    },
  },
  particles: {
    color: {
      value: "#646cff", // purple
    },
    links: {
      color: "#a259ff", // purple
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 500,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // Callback when particles are loaded
  }, []);

  return (
    <Router>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
      />
      <Navbar key="navbar"/>
      <Routes key="routes">
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
