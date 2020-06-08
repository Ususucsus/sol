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
            <Minute minutes={1} accessibleFor={["Премиум"]} expireDate="08.07.2020"/>
            <Minute minutes={1211} accessibleFor={["Эконом", "Премиум"]} expireDate="31.12.2021"/>
            <Minute minutes={25} accessibleFor={["Эконом", "Премиум", "Вип"]} expireDate="08.08.2020"/>
          </div>

        </div>

      </div>
    )
  }
}

export default MinutesPanel;