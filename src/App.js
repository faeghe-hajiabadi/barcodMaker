import React, { useState } from "react";
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



const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ecf7ff;

  width: 100vw;
  height: 100vh;
`;

const RediusContainer = styled.div`
  background-color: #d9eaf7;
  width: 1220px;
  border-radius: 45px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(2, 1fr);
  width: 80vw;
  height: 90vh;
  padding-top: 2%;
  grid-gap: 1rem;
  grid-auto-flow: dense;
`;


function App() {
  const [urlValue, setUrlValue] = useState();
  const setUrlValueOnclick = () => {
    setUrlValue();
  };
  

  return (
    <Container>
      <RediusContainer>
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
      </RediusContainer>
    </Container>
  );
}

export default App;
