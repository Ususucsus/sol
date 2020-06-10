import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import TextWithLeftIcon from './TextWithLeftIcon';

class Present extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  formatExpireDate() {
    return "Действует до " + this.props.expireDate;
  }

  render() {
    return (
      <div className="present">
        <div className="textWrapper">
          <p className="semiTitle">{this.props.name}</p>
        </div>
        <div className="minuteDescriptionWrapper">
          <TextWithLeftIcon src="icons/timer.png" text={this.formatExpireDate()}/>  
        </div>
      </div>
    )
  }
}

Present.propTypes = {
  name: PropTypes.string.isRequired,
  expireDate: PropTypes.string.isRequired,
}

export default Present;