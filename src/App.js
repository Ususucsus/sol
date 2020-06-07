import React from 'react';
import './App.css';
import NamePanel from './Comps/NamePanel';
import InfoPanel from './Comps/InfoPanel';

function App() {
  return (
      <div className="content">
        <NamePanel />
        <InfoPanel />
      </div>
  );
}

export default App;
