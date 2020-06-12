import React from 'react';
import PropTypes from 'prop-types';
import { load, trimMobile, formatCardId } from "./utils";
import { withCookies, Cookies } from 'react-cookie';

class LoginPanel extends React.Component {
  constructor(props) {
    super(props);

    this.handleMobileChange = this.handleMobileChange.bind(this);
    this.handleCardChange = this.handleCardChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleCardKeyDown = this.handleCardKeyDown.bind(this);

    this.state = {
      mobile: "",
      card: "",

      error: false,
      errorMessage: "",
    };
  }

  componentDidMount() {
    const cookie_mobile = this.props.cookies.get("mobile");
    const cookie_card = this.props.cookies.get("card");

    if (cookie_card && cookie_mobile) {
      load(cookie_card, cookie_mobile).then(json => {
        let record = json;
        this.props.changeRecord(record);
        this.props.changePanel("main");
      }).catch(err => {
        this.props.cookies.remove("mobile");
        this.props.cookies.remove("card");
      })
    }
  }

  handleMobileChange(e) {
    let value = e.target.value;
    this.setState(() => ({mobile: value, error: false}));
  }
  
  handleCardChange(e) {
    let value = e.target.value;
    this.setState(() => ({card: value, error: false}));
  }

  handleLoginClick() {
    const card = formatCardId(this.state.card);
    const mobile = trimMobile(this.state.mobile);

    let error = false;
    let errorMessage = "";

    if (!mobile || mobile === "") {
      errorMessage = "Укажите номер телефона.";
    } else if (!card || card === "") {
      errorMessage = "Укажите номер карты..";
    }

    if (errorMessage !== "") {
      error = true;
      this.setState(() => ({error: error, errorMessage: errorMessage}));
    } else {
      load(card, mobile).then(json => {
        let record = json;
        this.props.cookies.set("mobile",mobile, {maxAge: 3600, secure: true});
        this.props.cookies.set("card", card, {maxAge: 3600, secure: true});
        this.props.changeRecord(record);
        this.props.changePanel("main");
      }).catch(err => {
        error = true;
        errorMessage = "Неверный номер телефона или номер карты. Попробуйте ещё раз или свяжитесь +7 917 802-13-33.";
        this.setState(() => ({error: error, errorMessage: errorMessage}));
      })
    }
  }

  handleCardKeyDown(e) {
    if (e.key === "Enter") {
      this.handleLoginClick();
    }
  }

  render() {
    return (
      <>
      <div className="loginBlock">

        <div className="loginContent">

          <div className="inputBlock">
            <label htmlFor="name">Номер телефона</label>
            <input className="mobileInput" name="mobile" type="text" placeholder="+79991234567" onChange={this.handleMobileChange} value={this.state.mobile}></input>
          </div>

          <div className="inputBlock">
            <label htmlFor="card">Номер карты</label>
            <input className="cardInput" name="card" type="number" placeholder="8000012345" onChange={this.handleCardChange} onKeyDown={this.handleCardKeyDown} value={this.state.card}></input>
          </div>

          {this.state.error ?
            <div className="errorMessage">
              {this.state.errorMessage}
            </div>
          : null}

          <div className="inputBlock">
            <button className="loginButton" onClick={this.handleLoginClick}>Войти</button>
          </div>

        </div>

      </div>

      <div className="loginBlock">

      <div className="loginContent">

        <p className="cookieInfo">Мы используем cookie, чтобы вам было удобно.</p>

      </div>

      </div>
      </>
    )
  }
}

LoginPanel.propTypes = {
  changePanel: PropTypes.func.isRequired,
  changeRecord: PropTypes.func.isRequired,

  cookies: PropTypes.instanceOf(Cookies).isRequired,
}

export default withCookies(LoginPanel);