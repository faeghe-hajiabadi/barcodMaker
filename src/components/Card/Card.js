import React, { useState,useContext } from "react";
import {
  UrlContainer,
  Title,
  DefaultInput,
  UrlSubmitBtn,
  HalfInput,
} from "../../commonStyle";

import { store } from "../../store";

export default function Card() {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const initialFormData = {
    name: "",
    contact: "",
    email: "",
    company: "",
    jobTitle: "",
    city: "",
    websiteAddress: "",
  };
  const [formState, setFormState] = useState(initialFormData);
  const handleInputChange = (e) => {
    console.log("e", e.target);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  console.log("this is state", formState);
  const handleFormSubmit = () => {
    console.log("e after submit",formState)
    dispatch({type:'ADD_VCARD',payload:formState})
  };
  return (
    <>
      <UrlContainer>
        <Title>vCard QR Code</Title>
        <form>
          <DefaultInput
            onChange={(e) => {
              handleInputChange(e);
            }}
            type="text"
            name="name"
            placeholder="name"
          />

          <DefaultInput
            onChange={(e) => {
              handleInputChange(e);
            }}
            name="name"
            placeholder="contact"
          />

          <DefaultInput
            onChange={(e) => {
              handleInputChange(e);
            }}
            name="email"
            type="email"
            placeholder="email"
          ></DefaultInput>

          <HalfInput
            onChange={(e) => {
              handleInputChange(e);
            }}
            type="text"
            placeholder="company"
            placeholder="company"
            name="company"
          ></HalfInput>
          <HalfInput
            onChange={(e) => {
              handleInputChange(e);
            }}
            type="text"
            placeholder="job title"
            placeholder="job title"
            name="jobTitle"
          ></HalfInput>

          <HalfInput
            onChange={(e) => {
              handleInputChange(e);
            }}
            name="city"
            type="text"
            placeholder="city"
          ></HalfInput>

          <HalfInput
            onChange={(e) => {
              handleInputChange(e);
            }}
            name="websiteAddress"
            type="text"
            placeholder="website"
          ></HalfInput>
        </form>
      </UrlContainer>

      <UrlSubmitBtn onClick={handleFormSubmit}>Generate QR</UrlSubmitBtn>
    </>
  );
}
