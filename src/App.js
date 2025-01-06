import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage'; // Import the LoginPage component
import EventPage from './EventPage'; // Import the EventPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/events" element={<EventPage />} /> {/* EventPage route */}
      </Routes>
    </Router>
  );
};

export default App;
