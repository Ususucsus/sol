import React from 'react';
import TextWithLeftIcon from './TextWithLeftIcon';
import Minute from './Minute';

class MinutesPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="block nameBlock">

        <div className="blockContent">

          <div className="blockTitle">
            <p>Подарочные минуты</p>
          </div>

          <div className="afterTitleWrapperVertical">
            <Minute />
            <Minute />
            <Minute />
          </div>

        </div>

      </div>
    )
  }
}

export default MinutesPanel;