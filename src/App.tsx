import { useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import './App.css'

interface ContactLink {
  url: string;
  text: string;
  className?: string;
}

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (_container: Container | undefined) => {
    // Callback when particles are loaded
  }, []);

  const contactLinks: ContactLink[] = [
    { url: 'https://www.linkedin.com/in/nurfarazi/', text: 'LinkedIn' },
    { url: 'https://github.com/nurfarazi', text: 'GitHub', className: 'github' }
  ];

  return (
    <Router>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
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
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={
          <div className="container">
            <header className="header">
              <h1>Nur Mohammad Farazi</h1>
              <h2>Principal Software Engineer</h2>
              <p>
                Dhaka, Bangladesh | +8801717369188 |{' '}
                <a href="mailto:nur369188@gmail.com">nur369188@gmail.com</a>
              </p>
              <div className="contact-info">
                {contactLinks.map((link) => (
                  <a
                    key={link.text}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link.className}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </header>

            <section className="section about-me">
              <h2>About Me</h2>
              <p>
                Versatile software engineer with 13+ years of experience adapting to diverse tech stacks to build scalable applications. Dedicated mentor and lifelong learner, I'm committed to crafting elegant solutions that meet evolving business needs.
              </p>
            </section>

            <section className="section skills">
              <h2>Skills</h2>
              <ul>
                <li><strong>Paradigm:</strong> SOLID, OOP, TDD, Clean Architecture, CQRS, Mediator, Hexagonal, Observer, Singleton, Factory, Module, Dynamic import, Functional, Reactive, Lazy Loading</li>
                <li><strong>Development Stack:</strong> .NET, Entity Framework, Node, Express, Angular, Ionic, RxJs, Bootstrap, MySQL, PostgreSQL, Redis, MongoDB, Firebase, AWS, gRPC, Blazor, CI/CD, SignalR, TypeScript</li>
                <li><strong>Cloud Services:</strong> Firebase, AWS (Lambda, S3, EC2, Beanstalk, SAM, VPN, Lightsail, API Gateway, Route 53, RDS)</li>
              </ul>
            </section>

            <section className="section work-experience">
              <h2>Work Experience</h2>
              <ul>
                <li><strong>Kaz Software (July 2022 - Current)</strong><br/>Principal Software Engineer - Developed and managed scalable SaaS products, led a global team, and implemented best practices for software development.</li>
                <li><strong>CholPori (Oct 2020 - June 2022)</strong><br/>Technical Lead - Developed no-code multimedia lesson builder and led a software and UX team to build an education platform.</li>
                <li><strong>Jeeon Bangladesh Ltd (June 2016 - Sept 2020)</strong><br/>Senior Software Engineer - Designed and developed an SMS-based ordering system and worked on all aspects of development including front-end, back-end, database, and mobile app.</li>
                <li><strong>AGD IT SOLUTION Sdn Bhd (April 2015 - May 2016)</strong><br/>Senior Software Engineer - Led a team in the design and development of a vehicle tracking solution and implemented a robust software data architecture.</li>
                <li><strong>Dream71 Bangladesh Ltd (Oct 2014 - April 2015)</strong><br/>Senior Software Engineer - Developed a real-time cricket dashboard app and led a team of game developers in Unity3D.</li>
                <li><strong>Independent Game Developer (April 2013 - Sept 2014)</strong><br/>Game Programmer - Developed games for international clients and ensured error-free code and sound design.</li>
                <li><strong>Rise Up Labs (Nov 2011 - Sept 2012)</strong><br/>Creative Director - Led game logic design team and created immersive game environments.</li>
              </ul>
            </section>

            <section className="section education">
              <h2>Education</h2>
              <ul>
                <li>
                  <strong>BSc in Computer Science and Engineering (2006 - 2010)</strong><br/>
                  State University of Bangladesh
                </li>
              </ul>
            </section>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
