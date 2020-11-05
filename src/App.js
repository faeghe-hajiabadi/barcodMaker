import React, { useState } from "react";
import Tabs from "./components/Tabs/Tabs";
import styled from "styled-components";
import "./App.css";
import BarCodeGenerator from "./components/BarCodeGenarator/BarCodeGenerator";
import Url from "./components/Url/Url";

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
import next from "./img/next.png";
function App() {
  const [wifiCheckBox, setCheckBox] = useState({
    None: false,
    "WPA/WPA2": false,
    WEP: false,
  });
  const items = ["One", "Two", "Three"];
  const handleToggle = ({ target }) =>
    setCheckBox((s) => ({ ...s, [target.name]: !s[target.name] }));

  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-template-rows: repeat(6, 300px);
    grid-gap: 1rem;
    grid-auto-flow: dense;
    background-color: #ecf7ff;
  `;
  const TabsStyled = styled.div`
    display: grid;
  `;
  return (
    <Container>
      <Tabs>
        <div label={url} activeLabel={urlHover}>
          <Url />
        </div>
        <div label={card} activeLabel={cardHover}>
          vCard QR Code
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <button>Generate QR</button>
        </div>
        <div label={text} activeLabel={textHover}>
          <input type="text" placeholder="Enter your Text"></input>
          <button>Generate QR</button>
        </div>
        <div label={message} activeLabel={messageHover}>
          Email QR Code
          <form>
            <label>
              Email:
              <input type="text" name="your email" />
            </label>
            <label>
              Subject
              <input placeholder="Enter your email subject"></input>
            </label>
            <label>
              message
              <input placeholder="Enter your message"></input>
            </label>
          </form>
          <button>Generate QR</button>
        </div>
        <div label={wifi} activeLabel={wifiHover}>
          <form>
            <label>Network Name:</label>
            <input placeholder="SSID"></input>
            <label>Password:</label>
            <input></input>
            <label>Encryption</label>
            {Object.keys(wifiCheckBox).map((key) => (
              <input
                type="checkbox"
                onChange={handleToggle}
                key={key}
                name={key}
                checked={wifiCheckBox[key]}
              />
            ))}
          </form>
          <button>Generate QR</button>
        </div>
        <div label={bitcoin} activeLabel={bitcoinHover}>
          <form>
            <label>Cryptocurrency</label>
            {Object.keys(wifiCheckBox).map((key) => (
              <input
                type="checkbox"
                onChange={handleToggle}
                key={key}
                name={key}
                checked={wifiCheckBox[key]}
              />
            ))}
            <label>Amount</label>
            <input></input>
            <label>Receiver</label>
            <input></input>
            <label>Message</label>
            <input></input>
          </form>
        </div>
        <div label={img} activeLabel={imgDis}>
          OOPS you need to sign up
        </div>
      </Tabs>

      <BarCodeGenerator />
    </Container>
  );
}

export default App;
