import React from 'react';
import './HomePage.css'; // Updated to use the new HomePage.css file

interface ContactLink {
  url: string;
  text: string;
  className?: string;
}

const HomePage: React.FC = () => {
  const contactLinks: ContactLink[] = [
    { url: 'https://www.linkedin.com/in/nurfarazi/', text: 'LinkedIn' },
    { url: 'https://github.com/nurfarazi', text: 'GitHub', className: 'github' }
  ];

  return (
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
        Experienced Technical Project Manager and Principal Software Engineer with 14+ years delivering scalable software and cloud solutions. Proven track record leading cross-functional global teams, managing complex IT projects across web, mobile, and cloud platforms. Skilled in stakeholder alignment, crisis resolution, and project recovery, with a hands-on approach to solving real-world problems at scale.
        </p>
      </section>

      <section className="section project-management">
        <h2>Project Management & Leadership</h2>
        <ul>
          <li>Led cross-functional teams of up to 12, delivering full-cycle projects across web, mobile, and cloud platforms.</li>
          <li>Defined scope, goals, and deliverables aligned with business objectives across multiple SaaS products.</li>
          <li>Managed timelines, sprints, and budgets using Agile (Scrum, Kanban) methodologies.</li>
          <li>Acted as primary liaison between technical teams, stakeholders, and external partners.</li>
          <li>Mentored junior team members and established a software engineer evaluation/growth framework.</li>
        </ul>
      </section>

      <section className="section tools-methods">
        <h2>Tools & Methods</h2>
        <ul>
          <li><strong>Frontend & UI:</strong> Angular (8 yrs), RxJS (4 yrs), TypeScript (6 yrs), Bootstrap, SCSS, HTML5, Responsive Design</li>
          <li><strong>Backend:</strong> .NET Core (8 yrs), Node.js (8 yrs), REST APIs, WebSocket, SignalR</li>
          <li><strong>Mobile:</strong> Flutter (1 yr), Ionic (5 yrs), Kotlin (Android)</li>
          <li><strong>Databases:</strong> PostgreSQL (6 yrs), Redis (6 yrs), MongoDB (4 yrs), MySQL (5 yrs), DynamoDB (1 yr)</li>
          <li><strong>Cloud & DevOps:</strong> AWS (10 yrs – Lambda, EC2, SAM, Route 53, RDS, etc.), Firebase (7 yrs), Docker, CI/CD</li>
          <li><strong>Architecture & Patterns:</strong> Clean Architecture, CQRS, Hexagonal, SOLID, Microservices, gRPC</li>
          <li><strong>AI & Automation:</strong> ChatBot, Invoice Automation, Workflow Automation</li>
          <li><strong>Project & Collaboration Tools:</strong> Jira, YouTrack, GitLab Board, GitHub, GitLab, Figma, Miro</li>
          <li><strong>Agile Practices:</strong> Scrum, Kanban, Sprint Planning, Backlog Grooming</li>
          <li><strong>Other:</strong> SignalR, TDD, Technical Writing, Documentation Systems</li>
        </ul>
      </section>

      <section className="section work-experience">
        <h2>Work Experience</h2>
        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Principal Software Engineer</div>
            <div className="job-company">Kaz Software</div>
            <div className="job-duration">July 2022 - Current</div>
          </div>
          <div className="job-description">
            <ul>
              <li>Architected and launched a scalable SaaS platform, managing end-to-end delivery across product requirements, team capacity, and Agile sprint cycles.</li>
              <li>Shipped the platform within 2 months, enabling $50K/year in client expansion and reducing AWS infrastructure costs by 40%.</li>
              <li>Led a globally distributed team of 12 engineers and QA professionals, fostering collaboration and accountability.</li>
              <li>Standardized coding and documentation practices, improving engineering consistency and onboarding speed by 30%.</li>
              <li>Partnered with stakeholders to define scope, prioritize backlogs, and align delivery with evolving business goals.</li>
              <li>Conducted regular code reviews and mentorship sessions to elevate team performance and cross-skill development.</li>
              <li>Enforced best practices for software reliability, security, and scalability across the SDLC.</li>
            </ul>
          </div>
        </div>
        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Technical Lead</div>
            <div className="job-company">CholPori</div>
            <div className="job-duration">Oct 2020 - June 2022</div>
          </div>
          <div className="job-description">
            <ul>
              <li>Resolved critical infrastructure and delivery bottlenecks under tight deadlines, ensuring on-time launches and maintaining stakeholder confidence.</li>
              <li>Led a 12-member cross-functional team to design and deliver a kid-friendly digital education platform from the ground up.</li>
              <li>Spearheaded development of a no-code, drag-and-drop lesson builder and a read-aloud book creation tool with interactive MCQs.</li>
              <li>Engineered a real-time content-serving system providing live insights into student performance for teachers and parents.</li>
              <li>Oversaw the full SDLC — from architecture to DevOps — across web, mobile, and backend using .NET Core, Angular, Firebase, and Docker.</li>
              <li>Designed and implemented a flexible software engineer evaluation and growth framework adopted company-wide.</li>
            </ul>
          </div>
        </div>
        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Senior Software Engineer</div>
            <div className="job-company">Jeeon Bangladesh Ltd</div>
            <div className="job-duration">June 2016 - Sept 2020</div>
          </div>
          <div className="job-description">
            <ul>
              <li>Designed and launched an SMS-based medicine ordering system that enabled offline access for 10,000+ users, increasing daily active users (DAU) by 55%.</li>
              <li>Delivered full-stack solutions across web, mobile, and backend, using Node.js, .NET Core, Kotlin, Angular, and Firebase.</li>
              <li>Built and maintained an eHealth payments platform, earning a reputation for delivering reliable, cost-effective digital health tools.</li>
              <li>Led development of scalable systems for high-availability environments, with end-to-end responsibility across database design, API integration, and mobile UX.</li>
              <li>Established build sequences and testing pipelines using Docker and CI/CD, significantly reducing regression bugs and deployment friction.</li>
              <li>Played a key role in refining product workflows and data pipelines that supported real-time communication via Socket.IO and RxJS.</li>
            </ul>
          </div>
        </div>
        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Senior Software Engineer</div>
            <div className="job-company">AGD IT SOLUTION Sdn Bhd</div>
            <div className="job-duration">April 2015 - May 2016</div>
          </div>
          <div className="job-description">
            <ul>
              <li>Led a team of 6 engineers and UX designers to develop a scalable vehicle tracking system using Node.js, Express, MongoDB, AWS, and Google Maps API.</li>
              <li>Architected and implemented a robust microservices-based backend to ensure seamless data flow and fault tolerance.</li>
              <li>Built automated deployment pipelines with a unified build script, reducing deployment time by 50% and eliminating manual errors.</li>
              <li>Integrated real-time location tracking and mapping features for fleet management using Ionic, Objective-C, and Heroku.</li>
              <li>Collaborated with product owners and designers to ensure smooth integration across web and mobile platforms.</li>
              <li>Maintained comprehensive documentation, enabling smooth knowledge transfer and onboarding across cross-functional teams.</li>
            </ul>
          </div>
        </div>
        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Senior Software Engineer</div>
            <div className="job-company">Dream71 Bangladesh Ltd</div>
            <div className="job-duration">Oct 2014 - April 2015</div>
          </div>
          <div className="job-description">
            <ul>
              <li>Developed a real-time cricket dashboard using Node.js, Socket.IO, and Android, delivering live match analytics with minimal latency.</li>
              <li>Led a Unity3D (C#) game development team, launching multiple engaging titles with high download rates and strong user retention.</li>
              <li>Conducted rapid prototyping to validate game mechanics and technical feasibility, accelerating project go/no-go decisions.</li>
              <li>Implemented efficient pipelines for asset integration, build automation, and cross-platform deployment.</li>
              <li>Created and maintained detailed technical documentation to support knowledge sharing and future development cycles.</li>
            </ul>
          </div>
        </div>
        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Independent Game Developer</div>
            <div className="job-company">Self-employed</div>
            <div className="job-duration">April 2013 - Sept 2014</div>
          </div>
          <div className="job-description">
            <ul>
              <li>Designed and developed 2D games for international clients using Objective-C (iOS), C#, Cocos2D, and Box2D.</li>
              <li>Delivered custom game mechanics, UI, and animations based on unique client requirements across multiple genres.</li>
              <li>Ensured high code quality and performance through rigorous testing, debugging, and optimization.</li>
              <li>Managed the full development cycle independently, including client communication, time estimation, and delivery.</li>
              <li>Built strong client relationships through transparent communication and consistent high-quality delivery.</li>
            </ul>
          </div>
        </div>
        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Creative Director</div>
            <div className="job-company">Rise Up Labs</div>
            <div className="job-duration">Nov 2011 - Sept 2012</div>
          </div>
          <div className="job-description">
            <ul>
              <li>Directed the game logic and level design team, ensuring alignment between creative vision and technical execution.</li>
              <li>Conceptualized and developed immersive game environments and mechanics that enhanced user engagement.</li>
              <li>Collaborated with cross-functional teams to prototype and refine innovative gameplay features.</li>
              <li>Oversaw project timelines and quality benchmarks, consistently delivering polished game titles on schedule.</li>
              <li>Championed user experience improvements, contributing to increased player retention and satisfaction.</li>
            </ul>
          </div>
        </div>
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
  );
};

export default HomePage;
