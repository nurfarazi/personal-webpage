import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-brand">NMF</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;