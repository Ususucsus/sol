import React from 'react';
import './App.css';
import NamePanel from './Comps/NamePanel';
import InfoPanel from './Comps/InfoPanel';
import MinutesPanel from './Comps/MinutesPanel';
import PresentsPanel from './Comps/PresentsPanel';
import FooterPanel from './Comps/FooterPanel';
import LoginPanel from './Comps/LoginPanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: "login",
    };
  }

  changePanel(panel) {
    this.setState(() => ({currentView: panel}))
  }

  render() {
    return (
      <div>
        {this.state.currentView === "login" ? 
          <div className="content">
            <LoginPanel />
          </div>
        :
          <div className="content">
            <NamePanel />
            <InfoPanel />
            <MinutesPanel />
            <PresentsPanel />
            <FooterPanel />
          </div>
        }
      </div>
    )
  }
}

export default App;
