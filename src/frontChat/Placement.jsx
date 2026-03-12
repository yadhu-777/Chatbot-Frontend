

const Placement = () => {
  const upcomingDrives = [
    { id: 1, company: "Google", date: "Oct 15, 2026", role: "Software Engineer", eligibility: "7.5+ CGPA" },
    { id: 2, company: "TCS", date: "Oct 20, 2026", role: "System Engineer", eligibility: "6.0+ CGPA" },
    { id: 3, company: "Accenture", date: "Nov 02, 2026", role: "Associate Developer", eligibility: "All Branches" },
  ];

  return (
    <div className="portal-wrapper">
      {/* Navbar */}
      <nav className="placement-nav">
        <div className="logo">University<span>Placement</span></div>
        <ul className="nav-links">
          <li>Dashboard</li>
          <li>Companies</li>
          <li>Training</li>
          <li className="login-btn">Student Login</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-banner">
        <div className="hero-content">
          <h1>Shape Your Future</h1>
          <p>Connecting our talented students with world-class recruiters.</p>
          <div className="hero-btns">
            <button className="primary-btn">Register for Drive</button>
            <button className="secondary-btn">Download Brochure</button>
          </div>
        </div>
      </header>

      {/* Placement Stats Table */}
      <section className="stats-section">
        <h2>Placement Highlights (2025-26)</h2>
        <div className="stats-container">
          <div className="stat-box"><h4>850+</h4><p>Students Placed</p></div>
          <div className="stat-box"><h4>120+</h4><p>Recruiters</p></div>
          <div className="stat-box"><h4>45 LPA</h4><p>Highest Package</p></div>
          <div className="stat-box"><h4>8.5 LPA</h4><p>Average Package</p></div>
        </div>
      </section>

      {/* Upcoming Drives Table */}
      <section className="drive-section">
        <h2>Upcoming Recruitment Drives</h2>
        <div className="table-wrapper">
          <table className="drive-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Drive Date</th>
                <th>Criteria</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {upcomingDrives.map((drive) => (
                <tr key={drive.id}>
                  <td className="company-name">{drive.company}</td>
                  <td>{drive.role}</td>
                  <td>{drive.date}</td>
                  <td><span className="criteria-tag">{drive.eligibility}</span></td>
                  <td><button className="reg-btn">Register</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Placement;