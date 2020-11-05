import React from "react";
import styled from "styled-components";
import generate from "../../img/generate.png";

export default function Url() {
  const UrlContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20%;
    align-content: space-between;
  `;
  const Title = styled.div`
    font-weight: 700;
    font-size: 50px;
    color: #03288a;
    margin-bottom: 80px;
  `;
  const Input = styled.input`
    background: transparent;
    height: 50px;
    border: none;
    border-bottom: 2px solid #ddeaf9;
    ::placeholder {
      color: #a4b6d4;
      font-size: 16px;
    }
  `;
  const UrlSubmitBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: none;
    background: #03278a;
    width: 263px;
    height: 83px;
    border-radius: 100px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
  `;
  return (
    <>
      <UrlContainer className="test-btn">
        <Title>Website</Title>
        <Input type="text" placeholder="Enter your website"></Input>
      </UrlContainer>
      <UrlSubmitBtn>
        <img width="20" src={generate}></img>Generate QR Code
      </UrlSubmitBtn>
    </>
  );
}
