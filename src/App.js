import React from 'react';
import logo1 from './valorant-logo.png';
import logo2 from './valorant-title-logo.png';
import './App.css';
import TeamGenerator from './components/TeamGenerator';

function App() {
  return (
    <div className="App">
      <div className="App-logo-wrapper">
        <img src={logo1} className="App-logo1" alt="logo1" />
        <img src={logo2} className="App-logo2" alt="logo2" />
      </div>
      
      <header className="App-header">
        
        
        <TeamGenerator/>
        
      </header>
    </div>
  );
}

export default App;
