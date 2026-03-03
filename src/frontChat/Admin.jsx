import React, { useState } from 'react';


const ValidationForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Email Regex: Basic pattern check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password: Min 8 chars, 1 uppercase, 1 number
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Must be 8+ chars with a number and uppercase letter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully! 🎉");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      
            
      <form style={{height:"29rem"}} className="validation-form" onSubmit={handleSubmit}>
        {/* <h2 style={{color:"black"}}>Create Account</h2> */}
      <div className="adminImg">
        <img src="4.png" alt="" />
      </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className={errors.email ? 'input-error' : ''}
            onChange={handleChange}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className={errors.password ? 'input-error' : ''}
            onChange={handleChange}
          />
          {errors.password && <span className="error-text">{errors.password}</span>}
        </div>

        <button style={{marginTop:"1rem"}} type="submit" className="submit-btn">Sign Up</button>
      </form>
        </div>
   
  );
};

export default ValidationForm;