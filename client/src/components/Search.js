import React from "react";
import { Button } from "react-bootstrap";
import SearchResult from "./SearchResult";

const Search = (props) => {
  return(
    <div>
      <div className="form-group">
        <div className="row">
          <div className="col-md-12">
            <input type="text" className="search-input" placeholder="Depart. city" />
            <input type="text" className="search-input" placeholder="Dest. city" />
            <input type="text" className="search-input" placeholder="Depart. date" />
            <input type="text" className="search-input" placeholder="Return date" />
            <select className="cabin-option">
              <option>Cabin class</option>
              {props.cabin.map((cabin, index) => (
                <option key={index}>{cabin}</option>
              ))}
            </select>
            <input type="number" min="13" max="120" className="search-input" placeholder="No. of adult" />
            <input type="number" min="2" max="12" className="search-input" placeholder="No. of children" />
            <input type="number" min="0" max="2" className="search-input" placeholder="No. of infant" />
            <Button className="button">Search</Button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <SearchResult />
      </div>
    </div>
  )
}

export default Search;
