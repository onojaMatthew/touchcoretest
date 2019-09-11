import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./Search";
import { getCities } from "../store/actions/action_cities";

class SearchContainer extends Component{
  state = {
    errorMessage: ""
  }

  async componentDidMount() {
    try {
      await this.props.getCities()
    } catch(err) {
      this.setState({ errorMessage: err.message });
    }
  }

  render() {
    const { cities } = this.props;
    return(
      <div>
        <Search 
          {...this.props}
          cities={cities}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  }
}

const mapDispatchToProps = (dispatch) => {
  const dispatchProps = {
    getCities: (data) => dispatch(getCities())
  }
  return dispatchProps;
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
