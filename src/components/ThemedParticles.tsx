import { useCallback, useMemo } from 'react';
import type { Engine, ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from '../hooks/useTheme';

const ThemedParticles = () => {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // Callback when particles are loaded
  }, []);

  const particlesOptions: ISourceOptions = useMemo(() => ({
    background: {
      color: {
        value: theme === 'dark' ? '#000000' : '#f8f9fa',
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
        value: "#646cff",
      },
      links: {
        color: theme === 'dark' ? "#a259ff" : "#646cff",
        distance: 150,
        enable: true,
        opacity: theme === 'dark' ? 0.2 : 0.15,
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
        value: theme === 'dark' ? 0.5 : 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), [theme]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ThemedParticles;