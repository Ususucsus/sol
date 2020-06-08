import React from 'react';
import Minute from './Minute';
import Icon from './Icon';

class FooterPanel extends React.Component {
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
            <div>
              <p className="semiTitle">Позвонить</p>
              <p className="tire">—</p>
              <p className="after">+7 999 132-15-56</p>
            </div>

            <div>
              <p className="semiTitle">Написать</p>
              <p className="tire">—</p>
              <p className="after">mail@mail.ru</p>
            </div>

            <div>
              <p className="semiTitle">Поделиться</p>
              <p className="tire">—</p>
              <div className="footerIcons">
                <Icon src="icons/alert-circle.png" />
                <Icon src="icons/alert-circle.png" />
                <Icon src="icons/alert-circle.png" />
                <Icon src="icons/alert-circle.png" />
              </div>
            </div>

            <p className="smol-light">Политика конфиденциальности</p>
            <p className="smol-light">Обработка персональных данных</p>
          </div>

        </div>

      </div>
    )
  }
}

export default FooterPanel;