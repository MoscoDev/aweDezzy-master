import React, { useState } from "react";
import loginBanner from "../images/undraw_secure_login_pdn4.svg";
import google from "../images/Google__G__Logo.svg";
import facebook from "../images/Facebook_f_logo_(2021).svg";
import "../css/Login.css";
import { Button, Divider, Input } from "antd";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({email:"", password:""});

  const handleSubmit = (e)=>{
    setData({password:password, email:email})
    console.log(data);
  }

  return (
    <div className="login-page">
      <div className="login-left">
      <img src={loginBanner} alt="" width={"80%"}/>

      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <Input
            type="email"
            name="input"
            defaultValue=""
            value={email}
            autoComplete="off"
            required={true}
            size="large"
            placeholder="email or phone number"
            className="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password</label>
          <Input.Password
            type="password"
            name="password"
            value={password}
            size="large"
            autoComplete="off"
            placeholder="password"
            className="email"
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
          />
          <Button type="submit" size="large" className="login-button" onClick={handleSubmit}>
            <p>Login</p>
          </Button>
          <Divider type="horizontal" plain className="divider">
            Or login with
          </Divider>
          <Button type="submit" size="large" className="google">
            
              <span style={{ marginRight: "10px" }}>
                <img src={google} alt="" />
              </span>
              Login with Google
            
          </Button>
          <Button type="submit" size="large" className="google">
            <p>
              <span style={{ marginRight: "10px" }}>
                <img src={facebook} width={"24px"} alt="" />
              </span>
              Login with Facebook
            </p>
          </Button>
          <h3>{data.email}</h3>
          <h3>{data.password}</h3>
        </form>
      </div>
    </div>
  );
}
