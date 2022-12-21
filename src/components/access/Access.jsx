import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Access() {
  const [access, setaccess] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handlechange = (e) => {
    const { name } = e.target;
    setaccess({ ...access, [name]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "https://api.flywise.in/api/admin/add",
        access
      );
      console.log(data);
      alert("user added");
      history.push("/Universities");
    } catch (error) {
      console.log(error);
      alert("problem occured");
    }
  };

  return (
    <>
      <div
        style={{ borderRadius: "10px" }}
        className="employee-container p-5 my-5 col-lg-5 bg-white"
      >
        <Form onSubmit={handlesubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              autoComplete="email"
              onChange={handlechange}
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              autoComplete="password"
              onChange={handlechange}
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Access;
