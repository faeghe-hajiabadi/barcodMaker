import React from "react";
import {
  UrlContainer,
  Title,
  DefaultInput,
  UrlSubmitBtn,
  MessageInput,
} from "../../commonStyle";

export default function Message() {
  return (
    <>
      <UrlContainer>
        <Title>Email QR Code</Title>
        <form>
          <DefaultInput type="text" name="name" placeholder="Email" />

          <DefaultInput type="number" value="contact" placeholder="Subject" />

          <MessageInput type="message" placeholder="message"></MessageInput>
        </form>
      </UrlContainer>

      <UrlSubmitBtn>Generate QR</UrlSubmitBtn>
    </>
  );
}
