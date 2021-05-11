import React from 'react'
import { NavigationConfig } from './assets/config/NavigationConfig';
import { Navbar } from './assets/views/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <NavigationConfig />
      </div>
    </Router>

  );
}

export default App;
