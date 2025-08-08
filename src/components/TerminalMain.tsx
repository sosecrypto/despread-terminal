import React, { useState, useEffect } from 'react';
import './TerminalMain.css';
import TotalMediaPanel from './panels/TotalMediaPanel';
import MonthlyArticlesPanel from './panels/MonthlyArticlesPanel';
import TopProvidersPanel from './panels/TopProvidersPanel';

const TerminalMain: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('overview');

  const handleNavChange = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <main className="terminal-main">
      <div className="terminal-grid">
        <TotalMediaPanel />
        <MonthlyArticlesPanel />
        <TopProvidersPanel />
      </div>
    </main>
  );
};

export default TerminalMain;
