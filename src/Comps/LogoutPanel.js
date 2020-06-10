import React from 'react';
import PropTypes from 'prop-types';
import { withCookies, Cookies, lax } from 'react-cookie';

class LogoutPanel extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);

    this.state = {
      
    };
  }

  logout() {
    this.props.cookies.remove("mobile");
    this.props.cookies.remove("card");
    this.props.changePanel("login");
  }

  render() {
    return (
      <div className="block logout">

        <div className="blockContent">

          <button onClick={() => this.logout()}>Выйти</button>

        </div>

      </div>
    )
  }
}

LogoutPanel.propTypes = {
  changePanel: PropTypes.func.isRequired,
  cookies: PropTypes.instanceOf(Cookies).isRequired,
}

export default withCookies(LogoutPanel);