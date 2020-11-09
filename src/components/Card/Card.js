import React from "react";
import {
  UrlContainer,
  Title,
  DefaultInput,
  UrlSubmitBtn,
  HalfInput,
} from "../../commonStyle";

export default function Card() {
  return (
    <>
      <UrlContainer>
        <Title>vCard QR Code</Title>
        <form>
          <DefaultInput type="text" name="name" placeholder="name" />

          <DefaultInput type="number" value="contact" placeholder="contact" />

          <DefaultInput type="email" placeholder="email"></DefaultInput>

          <HalfInput
            type="text"
            placeholder="company"
            placeholder="company"
          ></HalfInput>
          <HalfInput
            type="text"
            placeholder="job title"
            placeholder="job title"
          ></HalfInput>

          <HalfInput type="text" placeholder="city"></HalfInput>

          <HalfInput type="text" placeholder="website"></HalfInput>
        </form>
      </UrlContainer>

      <UrlSubmitBtn>Generate QR</UrlSubmitBtn>
    </>
  );
}
