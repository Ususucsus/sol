import React from 'react';
import PropTypes from 'prop-types';

class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="icon">
        <img src={this.props.src}></img>
      </div>
    )
  }
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Icon;