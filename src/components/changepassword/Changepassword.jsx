import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Changepassword() {
  const [access, setaccess] = useState({
    adminId: "",
    password: "",
    newPassword: "",
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
        "https://api.flywise.in/api/admin/change-password",
        access
      );
      console.log(data);
      alert("Password Changed");
      history.push("/Universities");
    } catch (error) {
      if (error.response.status === 400) {
        alert("old password not matched");
      } else {
        alert("problem occured");
      }
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
              name="adminId"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              autoComplete="password"
              onChange={handlechange}
              placeholder="Old Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNewPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              name="newPassword"
              autoComplete="password"
              onChange={handlechange}
              placeholder="New Password"
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

export default Changepassword;
