import React, { useState } from "react";
import {
  UrlContainer,
  Title,
  DefaultInput,
  UrlSubmitBtn,
  Label,
} from "../../commonStyle";

export default function Wifi() {
  const [wifiCheckBox, setCheckBox] = useState({
    id: 1,
    value: "None",
    isChecked: false,
    id: 2,
    value: "WPA/WPA2",
    isChecked: false,
    id: 2,
    value: "WEP",
    isChecked: false,
  });
  const handleToggle = ({ target }) =>
    setCheckBox((s) => ({ ...s, [target.name]: !s[target.name] }));

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

          <Label>Encryption</Label>

          <ul>
            {Object.keys(wifiCheckBox).map((key, item) => (
              <input
                type="checkbox"
                onChange={handleToggle}
                value={item}
                key={key}
                name={key}
                checked={wifiCheckBox[key]}
              />
            ))}
          </ul>
        </form>
      </UrlContainer>

      <UrlSubmitBtn>Generate QR</UrlSubmitBtn>
    </>
  );
}
