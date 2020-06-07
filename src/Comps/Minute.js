import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import TextWithLeftIcon from './TextWithLeftIcon';

class Minute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="minute">
        <p className="semiTitle">22 минуты</p>
        <div className="minuteDescriptionWrapper">
          <p className="light">Доступны для Премиум и Вип солярия</p>
        </div>
        <div className="minuteDescriptionWrapper">
          <TextWithLeftIcon src="icons/timer.png" text="Действует до 31.12.2021"/>  
        </div>
      </div>
    )
  }
}

Minute.propTypes = {
}

export default Minute;