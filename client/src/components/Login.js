import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { postLogin } from "../store/actions/action_login";


class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm {...this.props}/>
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
