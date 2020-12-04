import React, { useState, useContext, useEffect } from "react";
import {
  UrlContainer,
  Title,
  DefaultInput,
  UrlSubmitBtn,
  BigLabel,
  CheckBox,
} from "../../commonStyle";
import { store } from "../../store";
import convertObjectToText from "../../convertToText";

export default function BitCoin() {
  let wifiChoosed = "";
  const initialBitcoinState = {
    crypto: "test",
    amount: "test",
    reciver: "test",
    message: "test",
  };
  const [bitcoinState, setBitcoinState] = useState(initialBitcoinState);
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const [wifiCheckBox, setCheckBox] = useState([
    { value: "Bitcoin", isChecked: false },
    { value: "Bitcoin Cash", isChecked: false },
    { value: "Ether", isChecked: false },
    { value: "Litecoin", isChecked: false },
    { value: "Dash", isChecked: false },
  ]);

  const onToggleTodo = (index) => {
    setCheckBox((currentCheckBox) =>
      currentCheckBox.map((item, todoIndex) => {
        if (todoIndex === index) {
          return {
            ...item,
            isChecked: !item.isChecked,
          };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    wifiCheckBox.map((item) => {
      if (item.isChecked) {
        wifiChoosed = item.value;
      }
    });
    setBitcoinState({ ...bitcoinState, crypto: wifiChoosed });
  }, [wifiCheckBox]);

  const handleInputChange = (e) => {
    setBitcoinState({ ...bitcoinState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    dispatch({ type: "ADD_TEXT", payload: convertObjectToText(bitcoinState) });
  };

  return (
    <>
      <UrlContainer>
        <Title>WiFi QR Code</Title>
        <form>
          <CheckBox>
            <BigLabel>Crypto</BigLabel>
            <ul>
              {wifiCheckBox.map((item, key) => (
                <>
                  <input
                    type="checkbox"
                    onChange={() => onToggleTodo(key)}
                    value={item}
                    key={key}
                    name={key}
                    checked={wifiCheckBox[key].isChecked}
                  />
                  <label>{item.value}</label>
                </>
              ))}
            </ul>
          </CheckBox>
          <DefaultInput
            name="amount"
            onChange={handleInputChange}
            placeholder="Amount"
          />
          <DefaultInput
            name="reciver"
            onChange={handleInputChange}
            type="text"
            placeholder="Receiver"
          />
          <DefaultInput
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
          />
        </form>
      </UrlContainer>
      <UrlSubmitBtn onClick={handleFormSubmit}>Generate QR</UrlSubmitBtn>
    </>
  );
}
