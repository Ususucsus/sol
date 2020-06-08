import React from 'react';
import Minute from './Minute';
import Present from './Present';

class PresentsPanel extends React.Component {
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
            <p>Подарки</p>
          </div>

          <div className="afterTitleWrapperVertical">
            <Present />
            <Present />
            <Present />
            <Present />
          </div>

        </div>

      </div>
    )
  }
}

export default PresentsPanel;