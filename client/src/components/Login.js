import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { postLogin } from "../store/actions/action_login";


class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = (e, field) => {
    const { value } = e.target;
    console.log( value)
    this.setState({
      [field]: value
    })
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { postLogin } = this.props;
    const data = { email, password };
    console.log(data, " this is the data");
    try {
      await postLogin(data);
    } catch(err) {}
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <LoginForm
         {...this.props}
         handleChange={this.handleChange}
         onSubmit={this.onSubmit}
         email={email}
         password={password}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  const dispatchProps = {
    postLogin: (data) => dispatch(postLogin(data))
  }
  return dispatchProps;
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
