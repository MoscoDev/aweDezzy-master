import React, { useState } from "react";
import signupBanner from "../images/undraw_secure_login_pdn4.svg";
import google from "../images/Google__G__Logo.svg";
import facebook from "../images/Facebook_f_logo_(2021).svg";
import "../css/Signup.css";
import { Button, Divider, Input } from "antd";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
    tel: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (e) => {
    setData({
      password: password,
      email: email,
      firstName: firstName,
      tel: number,
      lastName: lastName,
    });
    console.log(data);
  };

  return (
    <div className="signup-page">
      <div className="signup-left">
        <img src={signupBanner} alt="" width={"90%"} />
      </div>
      <div className="signup-right">
        <form className="signup-form">
          <div className="top">
            <div>
              <label style={{ display: "block" }}>First Name</label>
              <Input
                type="text"
                name="input"
                defaultValue=""
                required={true}
                value={firstName}
                autoComplete="off"
                size="large"
                placeholder="First Name"
                className="email"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div>
              <label style={{ display: "block" }}>Last Name</label>
              <Input
                type="text"
                name="input"
                defaultValue=""
                required
                value={lastName}
                autoComplete="off"
                size="large"
                placeholder="Last name"
                className="email"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="top">
            <div>
              <label style={{ display: "block" }}>Email</label>
              <Input
                type="email"
                name="input"
                defaultValue=""
                value={email}
                required
                autoComplete="off"
                size="large"
                placeholder="E-mail Address"
                className="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label style={{ display: "block" }}>Phone number</label>
              <Input
                type="tel"
                name="Phone-number"
                required
                defaultValue=""
                value={number}
                autoComplete="off"
                size="large"
                placeholder="phone number"
                className="email"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="top">
            <div>
              <label style={{ display: "block" }}>Password</label>
              <Input.Password
                type="password"
                name="password"
                value={password}
                required
                size="large"
                autoComplete="off"
                placeholder="password"
                className="email"
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log(password);
                }}
              />
            </div>
            <div>
              <label style={{ display: "block" }}>Confirm Password</label>
              <Input.Password
                required
                type="password"
                name="password"
                value={confirmpassword}
                size="large"
                autoComplete="off"
                placeholder="confirm password"
                className="email"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  console.log(password);
                }}
              />
            </div>
          </div>
          <Button
            type="submit"
            size="large"
            className="signup-button"
            onClick={handleSubmit}
          >
            signup
          </Button>

          <Divider type="horizontal" plain className="divider">
            Or signup with
          </Divider>
          <div className="btn-group top">
            <Button type="submit" size="large" className="google">
              <span style={{ marginRight: "10px" }}>
                <img src={google} alt="" />
              </span>
              <span className="hide">Signup with Google</span>
            </Button>
            <Button type="submit" size="large" className="Facebook">
              <span style={{ marginRight: "10px" }}>
                <img src={facebook} width={"24px"} alt="" />
              </span>
              <span className="hide">signup with Facebook</span>
            </Button>

          </div>
          <div>{JSON.stringify(data)}</div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
