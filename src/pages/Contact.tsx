import './Contact.css'; // Import the CSS file
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-center-wrapper">
      <div className="container">
        <section className="section contact">
          <h2>Contact</h2>
          <div className="contact-info">
            <div
              className="social-links"
              style={{ borderTop: 'none', paddingTop: 0, marginTop: 0 }}
            >
              <a
                href="https://www.linkedin.com/in/nurfarazi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FaLinkedin style={{ marginRight: 6 }} />
                  LinkedIn
                </span>
              </a>
              <a
                href="https://github.com/nurfarazi"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
                aria-label="GitHub profile"
                title="GitHub"
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <FaGithub style={{ marginRight: 6 }} />
                  GitHub
                </span>
              </a>
            </div>
            <ul>
              <li>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:nur369188@gmail.com"
                  title="Send email to nur369188@gmail.com"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <FaEnvelope style={{ marginRight: 4 }} />
                    nur369188@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{' '}
                <a
                  href="tel:+8801717369188"
                  title="Call +8801717369188"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <FaPhone style={{ marginRight: 4 }} />
                    +8801717369188
                  </span>
                </a>
              </li>
              <li>
                <strong>Location:</strong> Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;