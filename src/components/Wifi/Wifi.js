import React, { useState } from "react";
import {
  UrlContainer,
  Title,
  DefaultInput,
  UrlSubmitBtn,
  BigLabel,
  CheckBox,
} from "../../commonStyle";

export default function Wifi() {
  const [wifiCheckBox, setCheckBox] = useState([
    { value: "None", isChecked: false },
    { value: "WPA/WPA2", isChecked: false },
    { value: "WEP", isChecked: false },
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
          <DefaultInput
            type="text"
            name="name"
            placeholder="Network Name
"
          />

          <DefaultInput type="password" placeholder="Password" />
          <CheckBox>
            <BigLabel>Encryption</BigLabel>
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
        </form>
      </UrlContainer>

      <UrlSubmitBtn>Generate QR</UrlSubmitBtn>
    </>
  );
}
