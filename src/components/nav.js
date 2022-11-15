import React from 'react';
import { Link } from 'react-router-dom';
import './calculator.css';

const NavBar = () => (
  <nav className="nav-bar">
    <h1 className="math-title">Math Magician</h1>
    <div className="tags">
      <Link to="/" className="link">Home</Link>
      |
      <Link to="/calculator" className="link">Calculator</Link>
      |
      <Link to="/quote" className="link">Quote</Link>
    </div>
  </nav>
);

export default NavBar;
