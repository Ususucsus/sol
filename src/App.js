import React from 'react';
import './App.css';
import NamePanel from './Comps/NamePanel';
import InfoPanel from './Comps/InfoPanel';
import MinutesPanel from './Comps/MinutesPanel';

function App() {
  return (
      <div className="content">
        <NamePanel />
        <InfoPanel />
        <MinutesPanel />
      </div>
  );
}

export default App;
