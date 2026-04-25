import { ShieldCheck, GraduationCap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Userform = () => {
  const navigate = useNavigate();

  function handleform() {
    navigate("/student");
  }
  function handleAdmin() {
    navigate("/admin");
  }

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#eef1f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '480px',
        backgroundColor: '#f5f7fa',
        borderRadius: '20px',
        border: '1px solid #dde2ea',
        padding: '28px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}>

        {/* Logo */}
        <img
          src="4.png"
          alt="HBS Logo"
          style={{ width: '100%', maxWidth: '180px', height: 'auto', marginBottom: '8px' }}
        />

        {/* Admin Card */}
        <div
          onClick={handleAdmin}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '24px 20px',
            cursor: 'pointer',
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            transition: 'box-shadow 0.2s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)'}
        >
          <div style={{
            width: '52px', height: '52px',
            borderRadius: '50%',
            backgroundColor: '#ece9fd',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '16px',
          }}>
            <ShieldCheck size={26} color="#5147c7" />
          </div>
          <h2 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: '700', color: '#1a1a2e' }}>
            Administrator
          </h2>
          <p style={{ margin: '0 0 16px', fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
            Manage system users, view detailed reports, and configure institution settings.
          </p>
          <span style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            fontSize: '14px', fontWeight: '600', color: '#5147c7', cursor: 'pointer',
          }}>
            Admin Login <ArrowRight size={16} />
          </span>
        </div>

        {/* Student Card */}
        <div
          onClick={handleform}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '24px 20px',
            cursor: 'pointer',
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            transition: 'box-shadow 0.2s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)'}
        >
          <div style={{
            width: '52px', height: '52px',
            borderRadius: '50%',
            backgroundColor: '#d4f5e9',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '16px',
          }}>
            <GraduationCap size={26} color="#0f6e56" />
          </div>
          <h2 style={{ margin: '0 0 16px', fontSize: '18px', fontWeight: '700', color: '#1a1a2e' }}>
            Student
          </h2>
          <span style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            fontSize: '14px', fontWeight: '600', color: '#0f6e56', cursor: 'pointer',
          }}>
            Student Login <ArrowRight size={16} />
          </span>
        </div>

      </div>
    </div>
  );
};

export default Userform;