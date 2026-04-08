import React from 'react';
import { useContext } from "react";
import Mycontext from "../../Context";
 
const StudentHub = () => {
  const { select2, setSelect2, setClick2, aadmin, student } = useContext(Mycontext);
  
  return (
    <div className="hub-container">
      {/* Decorative Background Elements */}
      <div className="shape blob-1"></div>
      <div className="shape blob-2"></div>

      <main className="glass-card">
        <header className="hub-header">
          <div className="icon-wrapper">🎓</div>
          <h1>Student Hub</h1>
          <p>
            Welcome to your all-in-one academic space. Access your syllabus, 
            stay updated with announcements, and get instant help using AI.
          </p>
        </header>

        <nav className="button-grid">
          <button onClick={()=>setSelect2("syllabus")} className="hub-btn syllabus">
            <span className="btn-icon">📘</span> Syllabus
          </button>
          <button onClick={()=>setSelect2("annc")} className="hub-btn announcements">
            <span className="btn-icon">📢</span> Announcements
          </button>
          <button onClick={()=>setSelect2("ai")} className="hub-btn ai-solver">
            <span className="btn-icon">🤖</span> AI Doubt Solver
          </button>
        </nav>
      </main>
    </div>
  );
};

export default StudentHub;