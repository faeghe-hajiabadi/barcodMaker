import React, { useState } from "react";
import {
  UrlContainer,
  Title,
  DefaultInput,
  UrlSubmitBtn,
  BigLabel,
  CheckBox,
} from "../../commonStyle";

export default function BitCoin() {
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
          <DefaultInput type="number" placeholder="Amount" />
          <DefaultInput type="text" placeholder="Receiver" />
          <DefaultInput type="text" placeholder="Message" />
        </form>
      </UrlContainer>
    </>
  );
}
