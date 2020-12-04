import React, { useState, useContext } from "react";
import convertObjectToText from "../../convertToText";
import {
  UrlContainer,
  Title,
  DefaultInput,
  UrlSubmitBtn,
  MessageInput,
} from "../../commonStyle";
import { store } from "../../store";

export default function Message() {
  const initialMessageState = {
    emailAddress: "test",
    emailSubject: "test",
    emailMessage: "test",
  };
  const [messageInfo, setMessageInfo] = useState(initialMessageState);
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const handleInputChange = (e) => {
    
    setMessageInfo({ ...messageInfo, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = () => {
    dispatch({ type: "ADD_TEXT", payload: convertObjectToText(messageInfo) });
  };

  return (
    <>
      <UrlContainer>
        <Title>Email QR Code</Title>
        <form>
          <DefaultInput
            onChange={handleInputChange}
            type="text"
            name="emailAddress"
            placeholder="Email"
          />

          <DefaultInput
            onChange={handleInputChange}
            name="emailSubject"
            placeholder="Subject"
          />

          <MessageInput
            onChange={handleInputChange}
            type="message"
            name="emailMessage"
            placeholder="message"
          ></MessageInput>
        </form>
      </UrlContainer>

      <UrlSubmitBtn onClick={handleFormSubmit}>Generate QR</UrlSubmitBtn>
    </>
  );
}
