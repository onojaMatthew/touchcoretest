import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./Search";
import { getCities } from "../store/actions/action_cities";
import { postSearch } from "../store/actions/action_search";

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
    const { cities, postSearch, search } = this.props;
    return(
      <div>
        <Search 
          {...this.props}
          
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    search: state.search,
  }
}

const mapDispatchToProps = (dispatch) => {
  const dispatchProps = {
    getCities: (data) => dispatch(getCities()),
    postSearch: (data) => dispatch(postSearch(data))
  }
  return dispatchProps;
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
