import React from 'react';
import StaticInfoPanel from './StaticInfoPanel';

class NamePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true
    };
  }

  render() {
    return (
      <div className="block nameBlock">

        <div className="blockContent">

          <div className="nameContainer">
            <p className="surname">Усманов</p>
            <p className="name">Артур</p>
          </div>

          <div className="staticInfoContainer">
            <div className="InfoContainer">
              {this.state.disabled ? <StaticInfoPanel className="staticInfoPanel error" text="Карта заблокирована" src="icons/alert-octagon" error={true}/> : <div style={{height: "43px"}}></div>}
              <StaticInfoPanel className="staticInfoPanel" text="+7 999 132-15-56" src="icons/call-phone" />
              <StaticInfoPanel className="staticInfoPanel" text="14.04.2001" src="icons/calendar-dates" />
              <StaticInfoPanel className="staticInfoPanel" text="80000 58434" src="icons/creditcard" />
            </div>
          </div>

          <div className="clear"></div>

        </div>

      </div>
    )
  }
}

export default NamePanel;