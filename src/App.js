import React from 'react';
import './App.css';
import NamePanel from './Comps/NamePanel';
import InfoPanel from './Comps/InfoPanel';
import MinutesPanel from './Comps/MinutesPanel';
import PresentsPanel from './Comps/PresentsPanel';

function App() {
  return (
      <div className="content">
        <NamePanel />
        <InfoPanel />
        <MinutesPanel />
        <PresentsPanel />
      </div>
  );
}

export default App;
