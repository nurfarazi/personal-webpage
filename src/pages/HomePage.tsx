import React from "react";
import "../App.css"; // Assuming styles are in App.css or adjust as needed

interface ContactLink {
  url: string;
  text: string;
  className?: string;
}

const HomePage: React.FC = () => {
  const contactLinks: ContactLink[] = [
    { url: "https://www.linkedin.com/in/nurfarazi/", text: "LinkedIn" },
    {
      url: "https://github.com/nurfarazi",
      text: "GitHub",
      className: "github",
    },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Nur Mohammad Farazi</h1>
        <h2>Principal Software Engineer</h2>
        <p>
          Dhaka, Bangladesh | +8801717369188 |{" "}
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
          Experienced Technical Project Manager and Principal Software Engineer
          with 14+ years delivering scalable software and cloud solutions.
          Proven track record leading cross-functional global teams, managing
          complex IT projects across web, mobile, and cloud platforms. Skilled
          in stakeholder alignment, crisis resolution, and project recovery,
          with a hands-on approach to solving real-world problems at scale.
        </p>
      </section>

      <section className="section project-management">
        <h2>Project Management & Leadership</h2>
        <ul>
          <li>
            Led cross-functional teams of up to 12, delivering full-cycle
            projects across web, mobile, and cloud platforms.
          </li>
          <li>
            Defined scope, goals, and deliverables aligned with business
            objectives across multiple SaaS products.
          </li>
          <li>
            Managed timelines, sprints, and budgets using Agile (Scrum, Kanban)
            methodologies.
          </li>
          <li>
            Acted as primary liaison between technical teams, stakeholders, and
            external partners.
          </li>
          <li>
            Mentored junior team members and established a software engineer
            evaluation/growth framework.
          </li>
        </ul>
      </section>

      <section className="section skills">
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Paradigm:</strong> SOLID, OOP, TDD, Clean Architecture,
            CQRS, Mediator, Hexagonal, Observer, Singleton, Factory, Module,
            Dynamic import, Functional, Reactive, Lazy Loading
          </li>
          <li>
            <strong>Development Stack:</strong> .NET, Entity Framework, Node,
            Express, Angular, Ionic, RxJs, Bootstrap, MySQL, PostgreSQL, Redis,
            MongoDB, Firebase, AWS, gRPC, Blazor, CI/CD, SignalR, TypeScript
          </li>
          <li>
            <strong>Cloud Services:</strong> Firebase, AWS (Lambda, S3, EC2,
            Beanstalk, SAM, VPN, Lightsail, API Gateway, Route 53, RDS)
          </li>
        </ul>
      </section>

      <section className="section tools-methods">
        <h2>Tools & Methods</h2>
        <ul>
          <li>
            <strong>Frontend & UI:</strong> Angular (8 yrs), RxJS (4 yrs),
            TypeScript (6 yrs), Bootstrap, SCSS, HTML5, Responsive Design
          </li>
          <li>
            <strong>Backend:</strong> .NET Core (8 yrs), Node.js (8 yrs), REST
            APIs, WebSocket, SignalR
          </li>
          <li>
            <strong>Mobile:</strong> Flutter (1 yr), Ionic (5 yrs), Kotlin
            (Android)
          </li>
          <li>
            <strong>Databases:</strong> PostgreSQL (6 yrs), Redis (6 yrs),
            MongoDB (4 yrs), MySQL (5 yrs), DynamoDB (1 yr)
          </li>
          <li>
            <strong>Cloud & DevOps:</strong> AWS (10 yrs – Lambda, EC2, SAM,
            Route 53, RDS, etc.), Firebase (7 yrs), Docker, CI/CD
          </li>
          <li>
            <strong>Architecture & Patterns:</strong> Clean Architecture, CQRS,
            Hexagonal, SOLID, Microservices, gRPC
          </li>
          <li>
            <strong>AI & Automation:</strong> ChatBot, Invoice Automation,
            Workflow Automation
          </li>
          <li>
            <strong>Project & Collaboration Tools:</strong> Jira, YouTrack,
            GitLab Board, GitHub, GitLab, Figma, Miro
          </li>
          <li>
            <strong>Agile Practices:</strong> Scrum, Kanban, Sprint Planning,
            Backlog Grooming
          </li>
          <li>
            <strong>Other:</strong> SignalR, TDD, Technical Writing,
            Documentation Systems
          </li>
        </ul>
      </section>

      <section className="section work-experience">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>Kaz Software (July 2022 - Current)</strong>
            <br />
            Principal Software Engineer - Developed and managed scalable SaaS
            products, led a global team, and implemented best practices for
            software development.
          </li>
          <li>
            <strong>CholPori (Oct 2020 - June 2022)</strong>
            <br />
            Technical Lead - Developed no-code multimedia lesson builder and led
            a software and UX team to build an education platform.
          </li>
          <li>
            <strong>Jeeon Bangladesh Ltd (June 2016 - Sept 2020)</strong>
            <br />
            Senior Software Engineer - Designed and developed an SMS-based
            ordering system and worked on all aspects of development including
            front-end, back-end, database, and mobile app.
          </li>
          <li>
            <strong>AGD IT SOLUTION Sdn Bhd (April 2015 - May 2016)</strong>
            <br />
            Senior Software Engineer - Led a team in the design and development
            of a vehicle tracking solution and implemented a robust software
            data architecture.
          </li>
          <li>
            <strong>Dream71 Bangladesh Ltd (Oct 2014 - April 2015)</strong>
            <br />
            Senior Software Engineer - Developed a real-time cricket dashboard
            app and led a team of game developers in Unity3D.
          </li>
          <li>
            <strong>Independent Game Developer (April 2013 - Sept 2014)</strong>
            <br />
            Game Programmer - Developed games for international clients and
            ensured error-free code and sound design.
          </li>
          <li>
            <strong>Rise Up Labs (Nov 2011 - Sept 2012)</strong>
            <br />
            Creative Director - Led game logic design team and created immersive
            game environments.
          </li>
        </ul>
      </section>

      <section className="section education">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>
              BSc in Computer Science and Engineering (2006 - 2010)
            </strong>
            <br />
            State University of Bangladesh
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
