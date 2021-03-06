import React from 'react';
import PropTypes from 'prop-types';
import StaticInfoPanel from './StaticInfoPanel';

class NamePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: this.props.isDisabled,
    };
  }

  render() {
    const {mobile, birthday, cardid, name, surname} = this.props;

    return (
      <div className="block nameBlock">

        <div className="blockContent nameBlockContent">

          <div className="nameOverflowContainter">
            <div className="nameContainer">
              <p className="name">{name}</p>
              <p className="surname">{surname}</p>
            </div>
          </div>

          <div className="staticInfoContainer">
            <div className="InfoContainer">
              {this.state.disabled ? <StaticInfoPanel className="staticInfoPanel error" text="Карта заблокирована" src="icons/alert-octagon" error={true}/> : <div style={{height: "43px"}}></div>}
              <StaticInfoPanel className="staticInfoPanel" text={mobile !== "" ? mobile : "Не указан"} src="icons/call-phone" />
              <StaticInfoPanel className="staticInfoPanel" text={birthday} src="icons/calendar-dates" />
              <StaticInfoPanel className="staticInfoPanel" text={cardid} src="icons/creditcard" />
            </div>
          </div>

          <div className="clear"></div>

        </div>

      </div>
    )
  }
}

NamePanel.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  cardid: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default NamePanel;