import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const LoginForm = (props) => {
  console.log(props)
  return(
    <div>
      <div className="form-group">
        <div className="row">
          <div className="col-md-12">
            <InputGroup className="mb-3">
              <FormControl 
                aria-label="Amount (to the nearest dollar)"
                value={props.email}
                onChange={(e) => props.handleChange(e,"email")}
                type="email"
              />
            </InputGroup>
          </div>
          <div className="col-md-12">
            <InputGroup className="mb-3">
              <FormControl 
                aria-label="Amount (to the nearest dollar)"
                value={props.password}
                onChange={(e) => props.handleChange(e,"password")}
                type="password"
              />
            </InputGroup>
            <Button onClick={(e) => props.onSubmit(e)}>Login</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
