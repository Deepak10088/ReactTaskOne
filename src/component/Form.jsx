import React, { useState } from 'react';
import './form.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPassword, setPasswordvisible] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;
    let newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required.';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is not valid.';
      formIsValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required.';
      formIsValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
      formIsValid = false;
    }

    if (formIsValid) {
      setEmail('');
      setPassword('');
      setErrors({ email: '', password: '' });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className='body'>
        <div className="form1">
          <h2>Sign Up Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label><b>Email: </b></label><br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>

            <div>
              <label><b>Password: </b></label><br />
              <input
                type={isPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <span onClick={() => setPasswordvisible(!isPassword)} className='eye-icon'>
                {isPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>

            <button type="submit"><b>Submit</b></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
