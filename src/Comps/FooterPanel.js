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
      <div className="block footerBlock">

        <div className="blockContent">

          <div className="blockTitle">
            <p>Контакты</p>
          </div>

          <div className="afterTitleWrapperVertical">
            <div>
              <p className="semiTitle">Позвонить</p>
              <p className="tire">—</p>
              <p className="after"><a href="tel:+79178021333">+7 917 802-13-33</a></p>
            </div>

            <div>
              <p className="semiTitle">Написать</p>
              <p className="tire">—</p>
              <p className="after"><a href="mailto:mail@mail.ru">mail@mail.ru</a></p>
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

            {0 ? <p className="smol-light">Политика конфиденциальности</p> : null }
            {0 ? <p className="smol-light">Обработка персональных данных</p> : null}
            
          </div>

        </div>

      </div>
    )
  }
}

export default FooterPanel;