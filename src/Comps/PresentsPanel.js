import React from 'react';
import PropTypes from 'prop-types';
import Present from './Present';

class PresentsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    let presents = [];
    for (let i = 0; i < this.props.presents.length; i++) {
      let p = this.props.presents[i];
      presents.push(<Present name={p["Name"]} expireDate={p["ExpireDate"]} key={i}/>);
    }

    return (
      <div className="block nameBlock">

        <div className="blockContent">

          <div className="blockTitle">
            <p>Подарки</p>
          </div>

          <div className="afterTitleWrapperVertical">
            {presents.length ? presents : <p className="notfound">У вас пока что нет подарков :(</p>}
          </div>

        </div>

      </div>
    )
  }
}

PresentsPanel.propTypes = {
  presents: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PresentsPanel;