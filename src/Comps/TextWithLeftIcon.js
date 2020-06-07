import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

class TextWithLeftIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div style={{display: "flex"}}>
        <Icon src={this.props.src}/>
        <div style={{marginLeft: "6px", marginTop: "-5px"}}>
          <p className="light" style={{fontSize: 24}}>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

TextWithLeftIcon.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default TextWithLeftIcon;