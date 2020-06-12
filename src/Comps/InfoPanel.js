import React from 'react';
import PropTypes from 'prop-types';
import TextWithLeftIcon from './TextWithLeftIcon';
import { minutesSuffix, minutesSuffixM } from './utils';


class InfoPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  formatMinutes() {
    return "Всего в солярии проведено " + this.props.totalMinutes + " минут" + minutesSuffix(this.props.totalMinutes);
  }

  formatMoney() {
    return "Накоплено " + this.props.money + " балл" + minutesSuffixM(this.props.money);
  }

  formatPercent() {
    return "Скидка — " + this.props.sale + " процент" + minutesSuffixM(this.props.sale);
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
              <p className="semiTitle">{this.formatPercent()}</p>
              <div className="saleDescriptionWrapper">
                { this.props.saleComment !== "" ? 
                <TextWithLeftIcon src="icons/alert-circle.png" text={this.props.saleComment}/>
                : null
                }
              </div>
            </div>
            <div className="minutes">
              <p className="semiTitle">{this.formatMoney()}</p>
              <div className="minutesDescriptionWrapper">
                <TextWithLeftIcon src="icons/time.png" text={this.formatMinutes()}/>
              </div>
            </div>

          </div>

        </div>

      </div>
    )
  }
}

InfoPanel.propTypes = {
  sale: PropTypes.number.isRequired,
  saleComment: PropTypes.string.isRequired,
  money: PropTypes.number.isRequired,
  totalMinutes: PropTypes.number.isRequired,
}

export default InfoPanel;