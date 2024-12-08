function NavBar() {
    return (
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="index.php">SRMS</a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="registration.php">Register</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="student_login.php">Login</a>
                  </li>

                  {/* <!-- adding drop down --> */}
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          More
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="syllabus.php">Syllabus</a>
                          <a class="dropdown-item" href="notes.php">Notes Link</a>
                          <a class="dropdown-item" href="h_link">Imp Links</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="feedback.php">Feedback</a>
                      </div>
                  </li>

                  {/* <!-- adding drop down --> */}
              </ul>
          </div>
      </nav>
    );
  }
  
  export default NavBar;