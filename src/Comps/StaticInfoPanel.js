import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

class StaticInfoPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="staticInfoBlock">
        <div className="staticInfo"><p style={{color: this.props.error ? "red" : "black"}}>{this.props.text}</p></div>
        <Icon src={this.props.error ? this.props.src + "-error.png" : this.props.src + ".png"}/>
      </div>
    )
  }
}

StaticInfoPanel.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  error: PropTypes.bool,
}

export default StaticInfoPanel;