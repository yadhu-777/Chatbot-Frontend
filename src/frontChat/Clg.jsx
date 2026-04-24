import React from 'react';
import { useNavigate } from 'react-router-dom';

const courses = [
  { code: '01', name: 'BCA', desc: 'Bachelor of Computer Applications' },
  { code: '02', name: 'B.Com', desc: 'Bachelor of Commerce' },
  
  { code: '03', name: 'BBA', desc: 'Bachelor of Business Administration' },
  { code: '04', name: 'BBA Aviation Management', desc: 'Specialised Aviation Business Track' },
  { code: '05', name: 'BSc Aircraft Maintenance', desc: 'Technical Aviation Sciences' },
];

const recruiters = [
  'IndiGo', 'AirAsia', 'SpiceJet', 'FlyDubai', 'Star Air', 'Air India SATS',
  'GoAir', 'IBM', 'TATA Advanced Systems', 'Citibank', 'HSBC', 'GE',
  'Marriott International', 'OYO Rooms', 'MakeMyTrip', 'Amadeus',
  'FedEx', "Byju's", 'BookMyShow', 'Hidesign',
];

const stats = [
  { value: '1994', label: 'Founded' },
  { value: '5+', label: 'UG Programmes' },
  { value: 'AICTE', label: 'Approved' },
  { value: 'UGC', label: 'Recognised' },
];

export default function Clg() {
  const navigate = useNavigate();
  return (
    <div className="clg-page">

      {/* ── HERO ── */}
      <section className="clg-hero">
        <div className="clg-hero-img-wrap">
          <img src="clg2.png" alt="Hindustan Business School Campus" className="clg-hero-img" />
          <div className="clg-hero-overlay" />
        </div>
        <div className="clg-hero-badge">
          <span>EST. 1994</span>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="clg-intro-strip">
        <div className="clg-logo-wrap">
          <img src="4.png" alt="HBS Logo" className="clg-logo" />
        </div>
        <div className="clg-intro-text">
          <p className="clg-greeting">Welcome to</p>
          <h1 className="clg-name">Hindustan Business School</h1>
          <p className="clg-tagline">Where Ambition Meets Excellence</p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="clg-stats-bar">
        {stats.map((s, i) => (
          <div className="clg-stat" key={i}>
            <span className="clg-stat-value">{s.value}</span>
            <span className="clg-stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── ABOUT ── */}
      <section className="clg-about">
        <div className="clg-about-inner">
          <div className="clg-section-tag">About Us</div>
          <h2 className="clg-section-title">A Legacy of Academic Excellence</h2>
          <div className="clg-about-divider" />
          <div className="clg-about-body">
            <p>
              Hindustan Business School (HBS) is managed by EveHans Academy, a registered society
              founded in 1994 by Dr K C Samuel. HBS is affiliated with Bengaluru North University,
              approved by AICTE & University Grants Commission (UGC).
            </p>
            <p>
              HBS is the <strong>first in Karnataka</strong> to offer BBA Aviation Management and
              BSc Aircraft Maintenance undergraduate degree courses with the assistance of Bengaluru
              North University and the Ministry of Higher Education, Govt. of Karnataka.
            </p>
            <p>
              HBS is a centre of excellence with a strong focus on providing quality education in
              Commerce, Aviation Commerce, Aviation Sciences and Aviation Management — proudly
              boasting University Rank Holders consecutively.
            </p>
            <p>
              HBS aims to develop human potential through quality research, teaching, practical
              learning and professional management services. The courses are designed to nurture
              young minds with the academic knowledge and life skills needed to become successful.
            </p>
            <p>
              Our pillars of strength are highly qualified Professors who deliver quality training
              using modern classroom aids, Seminars, Entrepreneurial Workshops and Innovation Labs —
              supported by Guest Lecturers from leading business communities.
            </p>
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="clg-courses">
        <div className="clg-courses-inner">
          <div className="clg-section-tag">Academics</div>
          <h2 className="clg-section-title">Courses Offered by HBS</h2>
          <p className="clg-courses-sub">Undergraduate Programmes</p>
          <div className="clg-course-grid">
            {courses.map((c) => (
              <div onClick={()=>navigate("/faq")} className="clg-course-card" key={c.code}>
                <span className="clg-course-code">{c.code}</span>
                <div className="clg-course-info">
                  <span className="clg-course-name">{c.name}</span>
                  <span className="clg-course-desc">{c.desc}</span>
                </div>
                <div className="clg-course-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUS LIFE ── */}
      <section className="clg-campus">
        <div className="clg-campus-inner">
          <div className="clg-campus-card">
            <div className="clg-campus-icon">🎓</div>
            <h3>Internships & Placements</h3>
            <p>
              Students are offered job opportunities during their internship period itself or after
              a thorough screening process — placed with leading companies across aviation,
              hospitality, finance and technology sectors.
            </p>
          </div>
          <div className="clg-campus-card">
            <div className="clg-campus-icon">🏫</div>
            <h3>Student-Friendly Campus</h3>
            <p>
              An optimum Teacher-Student ratio and all necessary amenities in proximity. We provide
              hostel facilities for both girls and boys with en-suite facilities.
            </p>
          </div>
          <div className="clg-campus-card">
            <div className="clg-campus-icon">💡</div>
            <h3>Holistic Development</h3>
            <p>
              Specialist Instructors help develop overall personality, character and communication
              skills — nurturing students to utilise their academic advantage for employment.
            </p>
          </div>
        </div>
      </section>

      {/* ── RECRUITERS ── */}
      <section className="clg-recruiters">
        <div className="clg-recruiters-inner">
          <div className="clg-section-tag">Our Recruiters</div>
          <h2 className="clg-section-title">Where Our Alumni Work</h2>
          <div className="clg-recruiter-tags">
            {recruiters.map((r, i) => (
              <span className="clg-recruiter-tag" key={i}>{r}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
     

    </div>
  );
}
