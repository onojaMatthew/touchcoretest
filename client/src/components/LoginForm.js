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
              <FormControl aria-label="Amount (to the nearest dollar)" />
            </InputGroup>
          </div>
          <div className="col-md-12">
            <InputGroup className="mb-3">
              <FormControl aria-label="Amount (to the nearest dollar)" />
            </InputGroup>
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
