import React from 'react';
import PropTypes from 'prop-types';
import { load } from "./utils";

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

  handleMobileChange(e) {
    let value = e.target.value;
    this.setState(() => ({mobile: value, error: false}));
  }
  
  handleCardChange(e) {
    let value = e.target.value;
    this.setState(() => ({card: value, error: false}));
  }

  handleLoginClick() {
    console.log("login");
    console.log(this.state.mobile);
    console.log(this.state.card);

    let error = false;
    let errorMessage = "";

    if (!this.state.mobile || this.state.mobile === "") {
      errorMessage = "Укажите номер телефона";
    } else if (!this.state.card || this.state.card === "") {
      errorMessage = "Укажите номер карты";
    }

    if (errorMessage !== "") {
      error = true;
      this.setState(() => ({error: error, errorMessage: errorMessage}));
    } else {
      load().then(json => {
        let record = JSON.parse(json);
        this.props.changeRecord(record);
        this.props.changePanel("main");
      }).catch(err => {
        console.log(err);
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
    )
  }
}

LoginPanel.propTypes = {
  changePanel: PropTypes.func.isRequired,
  changeRecord: PropTypes.func.isRequired,
}

export default LoginPanel;