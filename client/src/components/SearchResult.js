import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import thumbnail from "../asset/images/51x32.png"

class SearchResult extends Component{
  render() {
    return(
      <div>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <Card>
              <div className="row" style={styles.outerRow}>
                <div className="col-sm-12 col-md-2" style={styles.thumbnail}>
                  <img src={thumbnail} alt="" />
                </div>
                <div className="col-sm-6 col-md-3">
                  <div style={styles.timeContainer}>
                    <p style={{fontSize: 14, fontWeight: "bold"}}>07:45 AM</p>
                    <p style={styles.p}>London</p>
                    <p style={styles.p}>Sept 10, 19</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-1"></div>
                <div className="col-sm-6 col-md-3">
                  <div style={styles.timeContainer}>
                    <p style={{fontSize: 14, fontWeight: "bold"}}>07:45 AM</p>
                    <p style={styles.p}>U.S.A</p>
                    <p style={styles.p}>Sept. 12, 2019</p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div style={styles.timeContainer}>
                    <p style={{ fontSize: 26 }}>$179</p>
                    <p style={styles.p}>Business</p>
                    <Button variant="warning" style={styles.button}>Book Now</Button>
                  </div>
                </div>
                <span style={{...styles.p, margin: 15 }}>Operated upon by Air peace</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  timeContainer: {
    padding: 10,
  },
  p: {
    lineHeight: 0.1,
    fontSize: 12,
    color: "#aaa"
  },
  button: {
    fontSize:10,
    width: "100px"
  },
  outerRow: {
    padding: 20
  },
  thumbnail: {
    padding: 15
  }
}

export default SearchResult;