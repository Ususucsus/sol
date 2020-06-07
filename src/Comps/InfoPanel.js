import React from 'react';
import TextWithLeftIcon from './TextWithLeftIcon';

class InfoPanel extends React.Component {
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
            <p>Информация</p>
          </div>

          <div className="afterTitleWrapper">
            <div className="sale">
              <p className="semiTitle">Скидка — 100 процентов</p>
              <div className="saleDescriptionWrapper">
                <TextWithLeftIcon src="icons/alert-circle.png" text="Только на Премиум солярий, потому что мы так хотим."/>
              </div>
            </div>
            <div className="minutes">
              <p className="semiTitle">Бесплатных минут — 9999</p>
              <div className="minutesDescriptionWrapper">
                <TextWithLeftIcon src="icons/time.png" text="Всего проведено в солярии 92 минуты"/>
              </div>
            </div>

          </div>

        </div>

      </div>
    )
  }
}

export default InfoPanel;