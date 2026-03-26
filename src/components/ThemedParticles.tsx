import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Engine, ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '../hooks/useTheme';
import { colorOptions } from '../contexts/colorOptions';

const ThemedParticles = () => {
  const { theme, primaryColor } = useTheme();
  const [initialized, setInitialized] = useState(false);

  const accentColor = useMemo(() => {
    try {
      const colorOption = colorOptions.find((opt) => opt.name === primaryColor);
      return colorOption?.primary || '#00d9ff';
    } catch {
      return '#00d9ff';
    }
  }, [primaryColor]);

  useEffect(() => {
    let isMounted = true;

    void initParticlesEngine(async (engine: Engine) => {
      try {
        await loadSlim(engine);
      } catch {
        console.debug('Particles initialization skipped');
      }
    })
      .then(() => {
        if (isMounted) {
          setInitialized(true);
        }
      })
      .catch(() => {
        if (isMounted) {
          setInitialized(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const particlesLoaded = useCallback(async () => {
    // Callback when particles are loaded
  }, []);

  const particlesOptions: ISourceOptions = useMemo(
    () => ({
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
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
            parallax: {
              enable: true,
              force: 10,
              smooth: 20,
            },
          },
          resize: {
            enable: true,
            delay: 0.5,
          },
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
            easing: 'ease-out-quad',
          },
        },
      },
      particles: {
        color: {
          value: accentColor,
        },
        links: {
          color: accentColor,
          distance: 150,
          enable: true,
          opacity: theme === 'dark' ? 0.2 : 0.15,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
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
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [theme, accentColor],
  );

  if (!initialized) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ThemedParticles;
