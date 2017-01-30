import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="navbar-header"><Link className="navbar-brand" to="/" activeClassName="active">Quencher</Link></div>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
        </li>
        <li>
          <Link to="/dashboard" activeClassName="active">Dashboard</Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
