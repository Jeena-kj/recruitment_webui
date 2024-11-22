import "../styles/components/Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container py-3">
        {/* Desktop Header */}
        <div className="d-none d-lg-flex justify-content-between align-items-center">
          <a href="/" className="logo fw-bold text-primary text-decoration-none">
            Software Recruitment Co.
          </a>

          <nav>
            <ul className="nav">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle text-dark"
                  id="jobseekersDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  For jobseekers
                </a>
                <ul className="dropdown-menu" aria-labelledby="jobseekersDropdown">
                  <li>
                    <a className="dropdown-item" href="#findjobs">
                      Find Jobs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#guides">
                      Career Guides
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle text-dark"
                  id="clientsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  For clients
                </a>
                <ul className="dropdown-menu" aria-labelledby="clientsDropdown">
                  <li>
                    <a className="dropdown-item" href="#recruitment">
                      Recruitment Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#consulting">
                      Consulting
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#sectors" className="nav-link text-dark">
                  Sectors
                </a>
              </li>
              <li className="nav-item">
                <a href="#resources" className="nav-link text-dark">
                  Resources
                </a>
              </li>
            </ul>
          </nav>

          <div className="d-flex gap-2">
            <button className="btn btn-warning btn-sm rounded-pill">Upload CV</button>
            <button className="btn btn-danger btn-sm rounded-pill">Contact us</button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="d-flex d-lg-none justify-content-between align-items-center">

          <button className="btn btn-light p-2 border rounded">
            <i className="bi bi-list"></i>
          </button>

          <a href="/" className="logo fw-bold text-primary text-decoration-none">
            Software Recruitment Co.
          </a>

          <div className="d-flex gap-2">
            <button className="btn btn-warning btn-sm rounded-pill">Upload CV</button>
            <button className="btn btn-danger btn-sm rounded-pill">Contact us</button>
          </div>
        </div>

      </div>
    </header>
  );
}
