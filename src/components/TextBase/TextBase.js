import React from "react";
import generate from "../../img/generate.png";
import {
  UrlContainer,
  Title,
  DefaultInput,
  UrlSubmitBtn,
} from "../../commonStyle";

export default function TextBase(props) {
  const { name, placeholder } = props;
  return (
    <>
      <UrlContainer className="test-btn">
        <Title>{name}</Title>
        <DefaultInput type="text" placeholder={placeholder}></DefaultInput>
      </UrlContainer>
      <UrlSubmitBtn>
        <img width="20" src={generate} alt='generate qr logo'></img>Generate QR Code
      </UrlSubmitBtn>
    </>
  );
}
