const Contact = () => {
  return (
    <div className="container">
      <section className="section contact">
        <h2>Contact</h2>
        <div className="contact-info">
          <p>
            You can reach me at:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:nur369188@gmail.com">nur369188@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong> +8801717369188
            </li>
            <li>
              <strong>Location:</strong> Dhaka, Bangladesh
            </li>
          </ul>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/nurfarazi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nurfarazi"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;