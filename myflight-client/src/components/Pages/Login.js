import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { Button } from "../styles";
import React, { Component } from "react";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <Wrapper>
      <Logo>myFlight</Logo>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Register
            </Button>
          </p>
        </>
      ) : (
        <>
          <RegisterForm onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Wrapper>
  );
}
const Logo = styled.h1`
  font-family: "Times Roman", cursive;
  font-size: 3rem;
  color: orange;
  margin: 8px 0 16px;
`;
const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
  border :2px solid black;
  border-radius:10px;
`;
const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;
export default Login;