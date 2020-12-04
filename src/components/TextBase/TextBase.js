import React, { useContext, useState } from "react";
import convertObjectToText from "../../convertToText";
import generate from "../../img/generate.png";
import {
  UrlContainer,
  Title,
  DefaultInput,
  UrlSubmitBtn,
} from "../../commonStyle";
import { store } from "../../store";

export default function TextBase(props) {
  const [textInput, setTextInput] = useState();

  const globalState = useContext(store);
  const { dispatch } = globalState;

  

  const { name, placeholder } = props;

  const handleSubmitClick = () => {
    dispatch({ type: "ADD_TEXT", payload: convertObjectToText(textInput) });
  };
  return (
    <>
      <UrlContainer className="test-btn">
        <Title>{name}</Title>
        <DefaultInput
          type="text"
          placeholder={placeholder}
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        ></DefaultInput>
      </UrlContainer>
      <UrlSubmitBtn onClick={handleSubmitClick}>
        <img width="20" src={generate} alt="generate qr logo"></img>Generate QR
        Code
      </UrlSubmitBtn>
    </>
  );
}
