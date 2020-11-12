import React from "react";
import generate from "../../img/generate.png";
import { UrlContainer, Title, Text, UrlSubmitBtn } from "../../commonStyle";

export default function ImageComponent() {
  return (
    <>
      <UrlContainer className="test-btn">
        <Title>Image Gallery QR Code</Title>
        <Text>
          Share a series of images about your products, company or events.
        </Text>
       
      </UrlContainer>
      <UrlSubmitBtn>Sign Up Free</UrlSubmitBtn>
    </>
  );
}
