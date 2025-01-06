import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      if (response.data.message === 'Login successful') {
        // Navigate to the EventPage after successful sign-in
        navigate('/events');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('Sign-in failed. Please check your email and password.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2>Sign In</h2>

        <form onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.inputField}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.inputField}
            required
          />
          <button type="submit" style={styles.submitButton}>Sign In</button>
        </form>

        {error && <p style={styles.errorText}>{error}</p>}

        <button
          onClick={() => navigate('/register')} // Redirect to Register page
          style={styles.switchButton}
        >
          Don't have an account? Register here
        </button>
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
    backgroundColor: '#f4f4f4',
  },
  formBox: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '300px',
  },
  inputField: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    fontSize: '16px',
  },
  switchButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#007BFF',
    cursor: 'pointer',
    marginTop: '10px',
    textDecoration: 'underline',
  },
  errorText: {
    color: 'red',
    marginTop: '10px',
  },
};

export default SignInPage;
