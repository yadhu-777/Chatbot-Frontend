import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Placement = () => {

const data = [
    { year: '2020', students: 420 },
    { year: '2021', students: 510 },
    { year: '2022', students: 680 },
    { year: '2023', students: 740 },
    { year: '2024', students: 850 },
  ];
  const companyData = [
    "Reliance Industries Limited [RIL]", "Hewlett-Packard (HP)", "Mercedes Benz (India) Ltd.", "Airbus engineering",
    "Kirloskar Brothers", "Quest", "Volkswagen", "Safran Aerospace",
    "Porsche", "Jet Airways", "British Airways", "Indigo",
    "Mahindra Rise", "Audi", "Bajaj Corp Ltd", "Toyota",
    "Qatar Airways", "Scania", "Etihad", "Emirates",
    "Singapore Airlines", "Ducati", "Air Works"
  ];
const rows = [];
  for (let i = 0; i < companyData.length; i += 4) {
    rows.push(companyData.slice(i, i + 4));
  }


  return (
    <div className="portal-wrapper">
      {/* Navbar */}
      <nav className="placement-nav">
        <div className="logo"><h1>College Placement</h1></div>
        {/* <ul className="nav-links">
          <li>Dashboard</li>
          <li>Companies</li>
          <li>Training</li>
          <li className="login-btn">Student Login</li>
        </ul> */}
      </nav>

      {/* Hero Section */}
      <header style={{ backgroundImage: 'url("collegeImg2.png")' }}  className="hero-banner">
        <div className="hero-content">
          <h1>Shape Your Future</h1>
          <p>Connecting our talented students with world-class recruiters.</p>
       
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

      <div className="placementImg">
        <div className="description">
          <h1 className='placementTitle'>Placements</h1>
          <p>Placement assistance is offered to those students who complete their course
            and <br /> qualify as per the hiring  Employer / Company's requirements & regulations. </p>
          <h2 className='placementTitle2'>Current / On-Going Placement Opportunities</h2>
          <p>BlueDart hiring BBA Aviation Management graduates for Customer Service
Lufthansa Technik Services Limited hiring BBA AM, BBA and BSc AM graduates for Cargo. 
GMR hiring  AME Students 
IndiGo  hiring BBA Aviation Management for PLM Warehouse and Stores functions
IndiGo hiring AME as Jr Technician
Air India Engineering Services Ltd hiring AME B1.1 / B2 as Technicians </p>
        </div>
       <div className="placementImgg">
         <img src="placement.png" alt="" />
       </div>
      </div>

      {/* Upcoming Drives Table */}
     <div className="table-container">
      <h2 className="table-title">Frequently Visited Companies</h2>
      <div className="table-wrapper">
        <div className="table-header">Companies</div>
        <table className="company-table">
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((company, colIndex) => (
                  <td key={colIndex}>{company}</td>
                ))}
                {/* Fill empty cells if the last row isn't full */}
                {row.length < 4 && Array(4 - row.length).fill(null).map((_, i) => (
                  <td key={`empty-${i}`}></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="chart-card">
      <div className="chart-header">
        <h3>Year-wise Placement Trends</h3>
        <p>Total number of students placed per academic year</p>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis 
              dataKey="year" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 14 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 14 }}
            />
            <Tooltip 
              cursor={{ fill: '#f1f5f9' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Bar dataKey="students" radius={[6, 6, 0, 0]} barSize={50}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === data.length - 1 ? '#3b82f6' : '#1e293b'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>
  );
};

export default Placement;