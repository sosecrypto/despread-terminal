import React, { useState, useEffect } from 'react';
import './TerminalHeader.css';

interface TerminalHeaderProps {
  onNavChange?: (section: string) => void;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ onNavChange }) => {
  const [currentTime, setCurrentTime] = useState<string>('00:00:00');
  const [activeSection, setActiveSection] = useState<string>('overview');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    onNavChange?.(section);
  };

  return (
    <div className="terminal-header">
      <div className="terminal-top-bar">
        <div className="terminal-logo">
          <span className="logo-text">DeSpread</span>
          <span className="logo-subtitle">Terminal</span>
        </div>
        <div className="terminal-time">{currentTime}</div>
        <div className="terminal-status">
          <span className="status-dot"></span>
          CONNECTED
        </div>
      </div>
      <nav className="terminal-nav">
        <div 
          className={`nav-item ${activeSection === 'overview' ? 'active' : ''}`}
          onClick={() => handleNavClick('overview')}
        >
          OVERVIEW
        </div>
        <div 
          className={`nav-item ${activeSection === 'analytics' ? 'active' : ''}`}
          onClick={() => handleNavClick('analytics')}
        >
          ANALYTICS
        </div>
        <div 
          className={`nav-item ${activeSection === 'media' ? 'active' : ''}`}
          onClick={() => handleNavClick('media')}
        >
          MEDIA
        </div>
        <div 
          className={`nav-item ${activeSection === 'key-news' ? 'active' : ''}`}
          onClick={() => handleNavClick('key-news')}
        >
          KEY NEWS
        </div>
      </nav>
    </div>
  );
};

export default TerminalHeader;
