import React, { useState } from 'react';
import './Login.css';

export const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name Validation
    if (!name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (!/^[A-Z]/.test(name)) {
      newErrors.name = 'Name must start with a capital letter.';
    }

    // Email Validation
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    // Password Validation
    if (!password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (!/(?=.*[0-9]{4})(?=.*[A-Za-z]).{6,}/.test(password)) {
      newErrors.password =
        'Password must contain at least 4 numbers and be at least 6 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // If no errors, the form is valid.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      // Proceed with form submission logic.
    }
  };

  const handleClear = () => {
    setName('');
    setEmail('');
    setPassword('');
    setErrors({});
  };

  return (
    <div className="Html">
      <section className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <br />
          <div>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <br />
          <div className="btn">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
