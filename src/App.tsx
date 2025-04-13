import { useCallback, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext';
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
  fpsLimit: 120,
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
          force: 60,
          smooth: 10
        }
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 150,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad"
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
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
        area: 800,
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
    return Promise.resolve();
  }, []);

  return (
    <DarkModeProvider>
      <Router>
        <AppContent 
          particlesInit={particlesInit} 
          particlesLoaded={particlesLoaded}
          particlesOptions={particlesOptions} 
        />
      </Router>
    </DarkModeProvider>
  )
}

interface AppContentProps {
  particlesInit: (engine: Engine) => Promise<void>;
  particlesLoaded: (container: Container | undefined) => Promise<void>;
  particlesOptions: ISourceOptions;
}

const AppContent = ({ particlesInit, particlesLoaded, particlesOptions }: AppContentProps) => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const themeAwareParticlesOptions: ISourceOptions = {
    ...particlesOptions,
    background: {
      color: {
        value: darkMode ? "#121212" : "#ffffff",
      },
    },
    particles: {
      ...particlesOptions.particles,
      color: {
        value: darkMode ? "#ffffff" : "#646cff",
      },
      links: {
        ...(particlesOptions.particles?.links ?? {}),
        color: darkMode ? "#ffffff" : "#646cff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
    },
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={themeAwareParticlesOptions}
      />
      <div className="content-wrapper">
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App
