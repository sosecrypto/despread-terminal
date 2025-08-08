import React from 'react';
import './TerminalFooter.css';

const TerminalFooter: React.FC = () => {
  return (
    <footer className="terminal-footer">
      <div className="footer-left">
        <span className="connection-status">● CONNECTED</span>
      </div>
      <div className="footer-right">
        <span className="shortcuts">F1: Help | F2: Settings</span>
      </div>
    </footer>
  );
};

export default TerminalFooter;
