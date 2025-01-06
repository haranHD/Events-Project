import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To handle navigation

const LoginPage = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [registeredPassword, setRegisteredPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Handle account creation (register)
  const handleRegister = (event) => {
    event.preventDefault(); // Prevent page reload
    if (registeredEmail && registeredPassword) {
      setIsRegistered(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Please provide both email and password.');
    }
  };

  // Handle login
  const handleLogin = () => {
    if (loginEmail === registeredEmail && loginPassword === registeredPassword) {
      // Navigate to EventPage if login details match registered details
      navigate('/events');
    } else {
      // Show error if the email or password doesn't match
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.welcomeText}>{isRegistered ? 'Welcome Back!' : 'Create an Account'}</h2>
        <img
          src={`${process.env.PUBLIC_URL}/logo.jpg`}
          alt="College Logo"
          style={styles.logo}
        />

        {isRegistered ? (
          <>
            {/* Display error message if login fails */}
            {errorMessage && <p style={styles.errorText}>{errorMessage}</p>}
            
            {/* Email and Password Input Fields for Login */}
            <input
              type="text"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              style={styles.inputField}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              style={styles.inputField}
            />
            
            <div style={styles.buttonContainer}>
              {/* Log In Button */}
              <button style={styles.loginButton} onClick={handleLogin}>
                Log In
              </button>
              
              {/* Create an Account Button below the Log In button */}
              <button style={styles.createAccountButton} onClick={() => setIsRegistered(false)}>
                Create an account
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Display error message for registration */}
            {errorMessage && <p style={styles.errorText}>{errorMessage}</p>}
            
            <form onSubmit={handleRegister}>
              <input
                type="email"
                placeholder="Email"
                value={registeredEmail}
                onChange={(e) => setRegisteredEmail(e.target.value)}
                style={styles.inputField}
              />
              <input
                type="password"
                placeholder="Password"
                value={registeredPassword}
                onChange={(e) => setRegisteredPassword(e.target.value)}
                style={styles.inputField}
              />
              <button type="submit" style={styles.registerButton}>
                Register
              </button>
            </form>
            <button onClick={() => setIsRegistered(true)} style={styles.switchToLogin}>
              Already have an account? Log in
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#1a2c3b",
  },
  loginBox: {
    backgroundColor: "#345069",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    width: "350px",
  },
  welcomeText: {
    color: "#fff",
    marginBottom: "20px",
  },
  logo: {
    width: "150px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "2px solid #fff",
  },
  errorText: {
    color: 'red',
    marginBottom: '10px',
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  createAccountButton: {
    backgroundColor: "#6c849c",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  loginButton: {
    backgroundColor: "#0062cc",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  inputField: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#f7f7f7",
    fontSize: "14px",
  },
  registerButton: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px",
  },
  switchToLogin: {
    marginTop: "20px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    textDecoration: "underline",
  }
};

export default LoginPage;
