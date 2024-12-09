
import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="index.php">SRMS</a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="index.php">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="registration.php">Register</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="student_login.php">Login</a>
          </li>

          {/* Dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="syllabus.php">Syllabus</a>
              <a className="dropdown-item" href="notes.php">Notes Link</a>
              <a className="dropdown-item" href="h_link">Imp Links</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="feedback.php">Feedback</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
