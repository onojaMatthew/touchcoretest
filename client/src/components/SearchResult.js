import React, { Component } from 'react';
import { Table } from "react-bootstrap";

class SearchResult extends Component{
  render() {
    return(
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Departure date</th>
              <th>Departure time</th>
              <th>Arrival date</th>
              <th>Arrival time</th>
              <th>Airline</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>11/09/2019</td>
              <td>10:30AM cell</td>
              <td>12/09/2019</td>
              <td>02:45PM</td>
              <td>Air Peace</td>
              <td>&#8358;25000</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default SearchResult;