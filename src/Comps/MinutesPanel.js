import React from 'react';
import PropTypes from 'prop-types';
import Minute from './Minute';

class MinutesPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    let minutes = [];
    for (let i = 0; i < this.props.saleMinutes.length; i++) {
      let sm = this.props.saleMinutes[i];
      minutes.push(<Minute minutes={sm["Minutes"]} accessibleFor={sm["AccessibleFor"]} expireDate={sm["ExpireDate"]} key={i}/>);
    }

    return (
      <div className="block nameBlock">

        <div className="blockContent">

          <div className="blockTitle">
            <p>Подарочные минуты</p>
          </div>

          <div className="afterTitleWrapperVertical">
            {minutes}
          </div>

        </div>

      </div>
    )
  }
}

MinutesPanel.propTypes = {
  saleMinutes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default MinutesPanel;