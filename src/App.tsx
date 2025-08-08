import React from 'react';
import './App.css';
import TerminalHeader from './components/TerminalHeader';
import TerminalMain from './components/TerminalMain';
import TerminalFooter from './components/TerminalFooter';

function App() {
  return (
    <div className="App">
      <TerminalHeader />
      <TerminalMain />
      <TerminalFooter />
    </div>
  );
}

export default App;
