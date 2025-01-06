import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // Replace with your actual backend API endpoint for login
    const apiEndpoint = '/api/login'; 

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Simulate navigation to the events page after a successful login
        navigate('/events');
      } else {
        setErrorMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Server error. Please try again later.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.heading}>User Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.inputField}
          />
          {errorMessage && <p style={styles.errorText}>{errorMessage}</p>}
          <button type="submit" style={styles.loginButton}>Log In</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1a2c3b',
  },
  loginBox: {
    backgroundColor: '#345069',
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '350px',
  },
  heading: {
    color: '#fff',
    marginBottom: '20px',
    fontSize: '24px',
  },
  inputField: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#f7f7f7',
    fontSize: '14px',
  },
  errorText: {
    color: '#ff4d4f',
    fontSize: '14px',
    marginBottom: '10px',
  },
  loginButton: {
    backgroundColor: '#0062cc',
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '16px',
  },
};

export default UserLoginPage;
