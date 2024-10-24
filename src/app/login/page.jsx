"use client";
import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="form_area">
          <p className="title">LOGIN</p>
          <form action="">
            
            <div className="form_group">
              <label className="sub_title" htmlFor="email">
                Email
              </label>
              <input
                placeholder="Enter your email"
                id="email"
                className="form_style"
                type="email"
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="password">
                Password
              </label>
              <input
                placeholder="Enter your password"
                id="password"
                className="form_style"
                type="password"
              />
            </div>
            <div>
              <button className="btn">LOGIN</button>
              <p>
                Are you new?{" "}
                <a className="link" href="/signup">
                  Sign Up Here!
                </a>
              </p>
              <a className="link" href=""></a>
            </div>
            <a className="link" href=""></a>
          </form>
        </div>
        <a className="link" href=""></a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .form_area {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #eddcd9;
    height: auto;
    width: auto;
    border: 2px solid #264143;
    border-radius: 20px;
    box-shadow: 3px 4px 0px 1px #e99f4c;
  }

  .title {
    color: #264143;
    font-weight: 900;
    font-size: 1.5em;
    margin-top: 20px;
  }

  .sub_title {
    font-weight: 600;
    margin: 5px 0;
  }

  .form_group {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin: 10px;
  }

  .form_style {
    outline: none;
    border: 2px solid #264143;
    box-shadow: 3px 4px 0px 1px #e99f4c;
    width: 290px;
    padding: 12px 10px;
    border-radius: 4px;
    font-size: 15px;
  }

  .form_style:focus,
  .btn:focus {
    transform: translateY(4px);
    box-shadow: 1px 2px 0px 0px #e99f4c;
  }

  .btn {
    padding: 15px;
    margin: 25px 0px;
    width: 290px;
    font-size: 15px;
    background: #de5499;
    border-radius: 10px;
    font-weight: 800;
    box-shadow: 3px 3px 0px 0px #e99f4c;
  }

  .btn:hover {
    opacity: 0.9;
  }

  .link {
    font-weight: 800;
    color: #264143;
    padding: 5px;
  }
`;

export default Form;
