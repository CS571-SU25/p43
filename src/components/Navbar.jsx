

import { Link } from 'react-router';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Beijing Compass</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/sights">Sights</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/foods">Foods</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/malls">Malls</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
