
import { ShieldCheck, GraduationCap, ArrowRight } from 'lucide-react';

const Userform = () => {
  
  const handleSelection = (role) => {
    console.log(`Selected Role: ${role}`);
   
  };

  return (
    <div className="container2">
     <div className="outerCont">

        <img src="4.png" alt="" />
         <div className="card-grid">
        
  
        <div className="role-card admin-card" onClick={() => handleSelection('admin')}>
          <div className="icon-box-admin">
            <ShieldCheck size={32} />
          </div>
          <h2 className="role-title">Administrator</h2>
          <p className="role-description">
            Manage system users, view detailed reports, and configure institution settings.
          </p>
          <span className="action-text admin-text">
            Admin Login <ArrowRight size={18} />
          </span>
        </div>

        {/* Student Card */}
        <div className="role-card student-card" onClick={() => handleSelection('student')}>
          <div className="icon-box-student">
            <GraduationCap size={32} />
          </div>
          <h2 className="role-title">Student</h2>
          <p className="role-description">
            Access your dashboard, submit assignments, and view your academic progress.
          </p>
          <span className="action-text student-text">
            Student Login <ArrowRight size={18} />
          </span>
        </div>

     

      </div>
     </div>
    </div>
  );
};

export default Userform;