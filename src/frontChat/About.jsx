import React from 'react';


const managementTeam = [
  { name: 'Dr. K. C. Samuel', role: 'Chairman', photo: 'https://hindustanacademy.edu.in/uploads/chai_Image_e49c7e59bd.avif' },
  { name: 'Eva Samuel', role: 'Director', photo: 'https://hindustanacademy.edu.in/uploads/Eva_Samuel_Director_copy_bcee08a31a.avif' },
  { name: 'M Paul', role: 'Director', photo: 'https://hindustanacademy.edu.in/uploads/paul_894683abfe.avif' },
  { name: 'Benil Benjamin', role: 'Joint Director & Accountable Manager', photo: 'https://hindustanacademy.edu.in/uploads/Benil_b72f528b03.avif' },
  { name: 'Pranesh Rao', role: 'Admin Head', photo: 'https://hindustanacademy.edu.in/uploads/pranesh_edbd424535.avif' },
  { name: 'B K Manjunath Bhat', role: 'General Manager - Administration & Finance', photo: 'https://hindustanacademy.edu.in/uploads/maj_c312fb500e.avif' },
];

const academicTeam = [
  { name: 'Sateesh Mysore', role: 'Industry Expert & Dean of Aviation Engineering Studies', photo: 'https://hindustanacademy.edu.in/uploads/Sateesh_Mysore_ba532d3e59.avif' },
  { name: 'Sanjay V. M.', role: 'Deputy Director (Aeronautical) & Quality Manager', photo: 'https://hindustanacademy.edu.in/uploads/Sanjay_V_M_b040cae9fa.avif' },
  { name: 'Prem Narain Ojha', role: 'Training Manager - DGCA CAR 147 Basic MTO', photo: 'https://hindustanacademy.edu.in/uploads/Prem_Narain_Ojha_f84da5f435.avif' },
  { name: 'Wg Cdr R. Shankar', role: 'Examination Manager - DGCA CAR 147 Basic MTO', photo: 'https://hindustanacademy.edu.in/uploads/Wg_Cdr_R_Shankar_3c78dbb577.avif' },
  { name: 'Dr. Sumitha K.', role: 'Principal Hindustan Business School', photo: 'https://hindustanacademy.edu.in/uploads/Dr_Sumitha_K_Principal_of_HBS_4e9deec8f2.avif' },
  { name: 'Dr. Nandeesh Mathad', role: 'Principal Hindustan Electronics Academy (Polytechnic)', photo: 'https://hindustanacademy.edu.in/uploads/Dr_Nandeesh_Mathad_JPG_cc211b0d0f.avif' },
  { name: 'Anil Mathen', role: 'Associate Director Aviation Management Studies, HBS', photo: 'https://hindustanacademy.edu.in/uploads/Anil_Mathen_2_6ed38f14a7.avif' },
];

const salientFeatures = [
  'Centrally located in the midst of IT Corridor with easy access.',
  'Optimum Student-Teacher Ratio',
  'Highly Experienced & Qualified Trainers / Professors with immense industrial knowledge from IITs, leading Civil Aviation organisations, Indian Air Force and other reputed Private and Public organisations.',
  'Spacious Classrooms equipped with Audio-Video facilities.',
  'In-house developed Flight Simulator for training purposes.',
  'State of the art labs, various workshops, with ample necessary training equipment.',
  'Boys and Girls Hostel facilities.',
  'Transportation facility available.',
];

function App() {
  return (
    <div className="page">

      {/* Header Bar */}
      <div className="top-bar">
        <span>HINDUSTAN ACADEMY — EXCELLENCE IN AVIATION, ENGINEERING, SCIENCE & MANAGEMENT</span>
      </div>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-inner">
          <div className="section-label">EST. 1986</div>
          <h1 className="welcome-title">
            WELCOME TO<br />
            <span className="highlight">HINDUSTAN</span><br />
            ACADEMY
          </h1>
          <div className="welcome-divider" />
          <p className="welcome-text">
            EveHans Academy (registered under the Karnataka Societies Registration Act 1960), popularly known as
            Hindustan Academy is located in Old Airport Road, Marathahalli, Bengaluru. Dr KC Samuel founded it in 1986.
            Dr. K.C. Samuel, a pioneer in the field of education believes,{' '}
            <em>'Learning is not an Activity, it is an Experience'</em>.
            In the 3 decades since its inception, Hindustan Academy has constantly pushed the boundaries in its
            unrelenting endeavours to achieve academic excellence in Aviation, Engineering, Science and Management.
          </p>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="chairman-section">
        <div className="chairman-photo-col">
          <div className="chairman-photo-frame">
            <img
              src="https://hindustanacademy.edu.in/uploads/chai_Image_e49c7e59bd.avif"
              alt="Dr. K.C. Samuel"
              className="chairman-img"
            />
          </div>
          <div className="chairman-name-tag">Dr. K.C. Samuel</div>
          <div className="chairman-sub-tag">Founder & Chairman</div>
        </div>
        <div className="chairman-msg-col">
          <h2 className="chairman-title">Chairman's Message</h2>
          <p className="chairman-quote">"Learning is not an Activity, it is an Experience"</p>
          <p className="chairman-body">
            Every generation likes to think that it lives in a time of unique change, but the change in the last decade
            has happened on a truly unprecedented scale. This will continue at an even more accelerated pace in the
            future. How does one deal with change? Change descends on everyone equally; it is just that some see it
            faster. The first step therefore is to sense change as early as possible by understanding the key drivers
            of change. While technology will be the key driver of change, remember that all technology resides in the
            minds of people. People like you. At Hindustan Academy, we believe that in the world of tomorrow,
            individuals need to change before it becomes necessary to do so. You must have a vision, always beyond
            reach but never an impossible dream. You need to understand the importance and have a healthy desire to
            learn what it takes for you to reach higher, to develop your full potential and to achieve lasting success.
          </p>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="vision-section">
        <div className="vision-overlay" />
        <div className="vision-content">
          <h2 className="vision-heading">VISION — MISSION</h2>
          <div className="vision-cards">
            <div className="vision-card">
              <div className="vision-card-label">MISSION</div>
              <p>
                Our MISSION is to guide and empower students by enhancing their talents to fit right in the
                competitive world, with the right education to make them successful entrepreneurs and employable
                individuals.
              </p>
            </div>
            <div className="vision-card">
              <div className="vision-card-label">VISION</div>
              <p>
                Our VISION is to expand and grow with the advancement of the ever challenging world by setting up a
                fully equipped University for Aeronautical studies and other Engineering / Technology based curriculum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="team-section">
        <div className="team-header">
          <h2 className="team-title">MANAGEMENT TEAM</h2>
          <p className="team-subtitle">
            Our team of faculty members at Hindustan Academy is dedicated to guiding and mentoring students to
            achieve their academic and professional goals. Each faculty member is committed to providing a nurturing
            and supportive learning environment for all students.
          </p>
        </div>
        <div className="team-grid">
          {managementTeam.map((member, i) => (
            <div className="team-card" key={i}>
              <div className="team-card-photo">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-img"
                />
              </div>
              <div className="team-card-name">{member.name}</div>
              <div className="team-card-role">{member.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Team */}
      <section className="team-section academic-bg">
        <div className="team-header">
          <h2 className="team-title">ACADEMIC TEAM</h2>
        </div>
        <div className="team-grid">
          {academicTeam.map((member, i) => (
            <div className="team-card" key={i}>
              <div className="team-card-photo">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-img"
                />
              </div>
              <div className="team-card-name">{member.name}</div>
              <div className="team-card-role">{member.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Salient Features */}
      <section className="features-section">
        <h2 className="features-title">SALIENT FEATURES</h2>
        <div className="features-grid">
          {salientFeatures.map((f, i) => (
            <div className="feature-item" key={i}>
              <div className="feature-icon">✦</div>
              <p>{f}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">HINDUSTAN ACADEMY</div>
          <p className="footer-address">Old Airport Road, Marathahalli, Bengaluru, Karnataka, India</p>
          <p className="footer-copy">© 2024 EveHans Academy. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
