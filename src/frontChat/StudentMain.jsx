import { useContext } from "react";
import Mycontext from "../../Context";


const StudentHub = () => {
  const { setSelect2 } = useContext(Mycontext);

  return (
    <div className="sh-root">
      {/* Background orbs */}
      <div className="sh-orb sh-orb-1"></div>
      <div className="sh-orb sh-orb-2"></div>

      <div className="sh-card">
        {/* Badge */}
        <div className="sh-badge">
          <span className="sh-badge-dot"></span>
          Academic Portal
        </div>

        {/* Heading */}
        <h1 className="sh-title">
          Student <span>Hub</span>
        </h1>
        <p className="sh-sub">
          Your all-in-one academic space. Access your syllabus,
          stay updated with announcements, and get instant AI help.
        </p>

        {/* Navigation */}
        <nav className="sh-nav">
          <button
            className="sh-btn syllabus"
            onClick={() => setSelect2("syllabus")}
          >
            <span className="sh-btn-icon">📘</span>
            <span className="sh-btn-text">
              <span className="sh-btn-label">Syllabus</span>
              <span className="sh-btn-desc">View your course curriculum</span>
            </span>
          </button>

          <button
            className="sh-btn announcements"
            onClick={() => setSelect2("annc")}
          >
            <span className="sh-btn-icon">📢</span>
            <span className="sh-btn-text">
              <span className="sh-btn-label">Announcements</span>
              <span className="sh-btn-desc">Latest updates from faculty</span>
            </span>
          </button>

          <button
            className="sh-btn ai"
            onClick={() => setSelect2("ai")}
          >
            <span className="sh-btn-icon">🤖</span>
            <span className="sh-btn-text">
              <span className="sh-btn-label">AI Doubt Solver</span>
              <span className="sh-btn-desc">Get instant answers to your questions</span>
            </span>
          </button>
        </nav>

        {/* Footer */}
        <div className="sh-footer">
          <span className="sh-footer-text">Student Dashboard v1.0</span>
          <span className="sh-status">
            <span className="sh-status-dot"></span>
            All systems active
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentHub;
