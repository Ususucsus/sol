import React from 'react';
import './App.css';
import { CookiesProvider } from 'react-cookie';
import NamePanel from './Comps/NamePanel';
import InfoPanel from './Comps/InfoPanel';
import MinutesPanel from './Comps/MinutesPanel';
import PresentsPanel from './Comps/PresentsPanel';
import FooterPanel from './Comps/FooterPanel';
import LoginPanel from './Comps/LoginPanel';
import LogoutPanel from './Comps/LogoutPanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.changePanel = this.changePanel.bind(this);
    this.changeRecord = this.changeRecord.bind(this);

    this.state = {
      currentView: "login",

      record: undefined,
    };
  }

  changePanel(panel) {
    this.setState(() => ({currentView: panel}));
  }

  changeRecord(record) {
    this.setState(() => ({record: record}));
  }

  render() {
    let record = this.state.record;
    return (
      <div>
        <CookiesProvider>
          {this.state.currentView === "login" ? 
            <div className="content">
              <LoginPanel changePanel={this.changePanel} changeRecord={this.changeRecord}/>
            </div>
          :
            <div className="content">
              <NamePanel name={record["Name"]} surname={record["SurName"]} isDisabled={record["IsDisabled"]} cardid={record["CardId"]} mobile={record["Mobile"]} birthday={record["Birthday"]} />
              <InfoPanel sale={record["Sale"]} saleComment={record["SaleComment"]} money={record["Money"]} totalMinutes={record["TotalMinutes"]}/>
              <MinutesPanel saleMinutes={record["SaleMinutes"]}/>
              <PresentsPanel presents={record["Presents"]}/>
              <FooterPanel />
              <LogoutPanel changePanel={this.changePanel}/>
            </div>
          }
        </CookiesProvider>
      </div>
    )
  }
}

export default App;
