import React, { useState, useContext, useReducer } from "react";
import Tabs from "./components/Tabs/Tabs";
import styled from "styled-components";
import "./App.css";
import BarCodeGenerator from "./components/BarCodeGenarator/BarCodeGenerator";
import TextBase from "./components/TextBase/TextBase";
import Card from "./components/Card/Card";
import Message from "./components/Message/Message";
import Wifi from "./components/Wifi/Wifi";
import BitCoin from "./components/BitCoin/BitCoin";
import ImageComponent from "./components/ImageComponent/ImageComponent";

import url from "./img/link.png";
import urlHover from "./img/link-hover.png";
import card from "./img/card.png";
import cardHover from "./img/card-hover.png";
import text from "./img/text.png";
import textHover from "./img/text-hover.png";
import message from "./img/message.png";
import messageHover from "./img/message-hover.png";
import wifi from "./img/wi-fi.png";
import wifiHover from "./img/wi-fi-hover.png";
import bitcoin from "./img/bitcoin.png";
import bitcoinHover from "./img/bitcoin-hover.png";
import img from "./img/image.png";
import imgDis from "./img/image-hover.png";

import { store } from './store.js';


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(2, 700px);
  grid-gap: 1rem;
  grid-auto-flow: dense;
  background-color: #ecf7ff;
  padding: 10px;
`;





function App() {
  const [urlValue, setUrlValue] = useState();
  const setUrlValueOnclick = () => {
    setUrlValue();
  };
  const items = ["One", "Two", "Three"];


  return (
    <Container>
      <Tabs>
        <div label={url} activeLabel={urlHover}>
          <TextBase
            name="Email"
            placeholder="Enter Your Email"
            setUrlValue={setUrlValue}
          />
        </div>
        <div label={card} activeLabel={cardHover}>
          <Card />
        </div>
        <div label={text} activeLabel={textHover}>
          <TextBase
            name="Text"
            placeholder="Enter Your Text"
            setUrlValue={setUrlValue}
          />
        </div>
        <div label={message} activeLabel={messageHover}>
          <Message />
        </div>
        <div label={wifi} activeLabel={wifiHover}>
          <Wifi />
        </div>
        <div label={bitcoin} activeLabel={bitcoinHover}>
          <BitCoin />
        </div>
        <div label={img} activeLabel={imgDis}>
          <ImageComponent />
        </div>
      </Tabs>

      <BarCodeGenerator />
    </Container>
  );
}

export default App;
