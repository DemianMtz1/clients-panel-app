import React from 'react'
import { NavigationConfig } from './assets/config/NavigationConfig';
import { Navbar } from './assets/views/Navbar'


function App() {
  return (
    <div className="container">
      <Navbar />
      <NavigationConfig />
    </div>
  );
}

export default App;
