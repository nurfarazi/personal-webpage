import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Nur Mohammad Farazi</h1>
        <h2>Principal Software Engineer</h2>
        <p>
          Dhaka, Bangladesh | +8801717369188 |{' '}
          <a href="mailto:nur369188@gmail.com">nur369188@gmail.com</a>
        </p>
        <div>
          <a href="https://www.linkedin.com/in/nurfarazi/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/nurfarazi" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          Experienced Technical Project Manager and Principal Software Engineer with 14+ years delivering scalable software and cloud solutions.
        </p>
      </section>

      <section>
        <h2>Project Management & Leadership</h2>
        <ul>
          <li>Led cross-functional teams of up to 12, delivering full-cycle projects across web, mobile, and cloud platforms.</li>
          <li>Defined scope, goals, and deliverables aligned with business objectives across multiple SaaS products.</li>
          <li>Managed timelines, sprints, and budgets using Agile methodologies.</li>
        </ul>
      </section>

      <section>
        <h2>Tools & Methods</h2>
        <ul>
          <li>Frontend & UI: Angular, RxJS, TypeScript, HTML5</li>
          <li>Backend: .NET Core, Node.js, REST APIs</li>
          <li>Cloud & DevOps: AWS, Docker, CI/CD</li>
        </ul>
      </section>

      <section>
        <h2>Work Experience</h2>
        <div>
          <h3>Principal Software Engineer</h3>
          <p>Kaz Software | July 2022 - Current</p>
          <ul>
            <li>Architected and launched a scalable SaaS platform.</li>
            <li>Led a globally distributed team of 12 engineers.</li>
          </ul>
        </div>
        <div>
          <h3>Technical Lead</h3>
          <p>CholPori | Oct 2020 - June 2022</p>
          <ul>
            <li>Resolved critical infrastructure and delivery bottlenecks.</li>
            <li>Led a 12-member cross-functional team.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>BSc in Computer Science and Engineering (2006 - 2010) - State University of Bangladesh</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
