import React from 'react';
import './App.css';
import NamePanel from './Comps/NamePanel';
import InfoPanel from './Comps/InfoPanel';
import MinutesPanel from './Comps/MinutesPanel';
import PresentsPanel from './Comps/PresentsPanel';
import FooterPanel from './Comps/FooterPanel';

function App() {
  return (
      <div className="content">
        <NamePanel />
        <InfoPanel />
        <MinutesPanel />
        <PresentsPanel />
        <FooterPanel />
      </div>
  );
}

export default App;
