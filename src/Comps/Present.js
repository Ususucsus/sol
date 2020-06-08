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

  render() {
    return (
      <div className="present">
        <div className="textWrapper">
          <p className="semiTitle">Всем кто хорошо себя вел в 2020 году, полагается скидка в размере 20% на первое посещение какого-то там солярий до конца 2021 года</p>
        </div>
        <div className="minuteDescriptionWrapper">
          <TextWithLeftIcon src="icons/timer.png" text="Действует до 31.12.2021"/>  
        </div>
      </div>
    )
  }
}

Present.propTypes = {
}

export default Present;