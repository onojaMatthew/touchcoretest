import React, { Component } from "react";
import { Button, ButtonToolbar, Spinner } from "react-bootstrap";
import SearchResult from "./SearchResult";

class Search extends Component {
  state = {
    deptCity: "",
    deptDate: "",
    returnDate: "",
    destCity: "",
    cabinClass: "",
    noOfAdult: "",
    noOfChildren: "",
    noOfInfant: "",  

  }

  onSearch = () => {
    const { deptCity, destCity, deptDate, cabinClass, returnDate, noOfAdult, noOfChildren, noOfInfant } = this.state;
    const data = { deptCity, destCity, deptDate, cabinClass, returnDate, noOfAdult, noOfChildren, noOfInfant };
    console.log(data);

  }
  
  render() {
    const { cities } = this.props;
    console.log(this.props, " this.props")
    const { 
      deptDate,
      returnDate,
      noOfAdult,
      noOfChildren,
      noOfInfant,  
    } = this.state;

    console.log(this.state)
    return(
      <div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-12">
              <select 
                className="dept-city"
                onChange={(e) => {this.setState({ deptCity: e.target.value })}}
              >
                <option>Departure city</option>
                {cities.cities && cities.cities.map((city, index) => (
                  <option key={index} value={city.code}>{city.name}</option>
                ))}
              </select>
              <select 
                className="dest-city"
                onChange={(e) => {this.setState({ destCity: e.target.value })}}
              >
                <option>Destination city</option>
                {cities.cities && cities.cities.map((city, index) => (
                  <option key={index} value={city.code}>{city.name}</option>
                ))}
              </select>
              <input 
                type="date" 
                className="search-input" 
                placeholder="Depart. date"
                onChange={(e) => { this.setState({ deptDate: e.target.value })}}
                value={deptDate}
              />
              <input 
                type="date" 
                className="search-input" 
                placeholder="Return date"
                onChange={(e) => { this.setState({ returnDate: e.target.value })}}
                value={returnDate}
              />
              <select
                className="cabin-option"
                onChange={(e) => { this.setState({ cabinClass: e.target.value })}}
              >
                <option>Cabin class</option>
                {this.props.cabin.map((cabin, index) => (
                  <option key={index}>{cabin}</option>
                ))}
              </select>
              <input 
                type="number" 
                min="13" 
                max="120" 
                className="search-input" 
                placeholder="No. of adult"
                onChange={(e) => { this.setState({ noOfAdult: e.target.value })}}
                value={noOfAdult}

              />
              <input 
                type="number" 
                min="2" 
                max="12" 
                className="search-input" 
                placeholder="No. of children"
                onChange={(e) => { this.setState({ noOfChildren: e.target.value })}}
                value={noOfChildren}
              />
              <input 
                type="number" 
                min="0" max="2" 
                className="search-input" 
                placeholder="No. of infant"
                onChange={(e) => { this.setState({ noOfInfant: e.target.value })}}
                value={noOfInfant} 
              />
              <Button className="button">Search</Button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {this.props.search.isSearchLoading === true ? (
            <ButtonToolbar>
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            </ButtonToolbar>
          ) : <SearchResult />}
          
        </div>
      </div>
    )
  }
}


export default Search;
