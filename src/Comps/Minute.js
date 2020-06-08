import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import TextWithLeftIcon from './TextWithLeftIcon';
import { minutesSuffix } from './utils';

class Minute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  formatMinutes() {
    return this.props.minutes + " минут" + minutesSuffix(this.props.minutes);
  }

  formatAccessibleFor() {
    let s = "Доступны для ";
    for (let i = 0; i < this.props.accessibleFor.length - 2; i++) {
      s += this.props.accessibleFor[i] + ", ";
    }
    if (this.props.accessibleFor.length >= 2) {
      s += this.props.accessibleFor[this.props.accessibleFor.length - 2] + " и " + this.props.accessibleFor[this.props.accessibleFor.length - 1];
    } else {
      s += this.props.accessibleFor[this.props.accessibleFor.length - 1];
    }
    s += " солярия"
    return s;
  }

  formatExpireDate() {
    return "Действует до " + this.props.expireDate;
  }

  render() {
    return (
      <div className="minute">
        <p className="semiTitle">{this.formatMinutes()}</p>
        <div className="minuteDescriptionWrapper">
          <div className="textWrapper">
            <p className="light">{this.formatAccessibleFor()}</p>
          </div>
        </div>
        <div className="minuteDescriptionWrapper">
          <TextWithLeftIcon src="icons/timer.png" text={this.formatExpireDate()}/>  
        </div>
      </div>
    )
  }
}

Minute.propTypes = {
  minutes: PropTypes.number.isRequired,
  accessibleFor: PropTypes.arrayOf(PropTypes.string),
  expireDate: PropTypes.string.isRequired
}

export default Minute;