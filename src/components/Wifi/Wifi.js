import React, { useState, useEffect, useContext } from "react";
import { store } from "../../store";
import convertObjectToText from "../../convertToText";
import {
  UrlContainer,
  Title,
  DefaultInput,
  UrlSubmitBtn,
  BigLabel,
  CheckBox,
} from "../../commonStyle";

export default function Wifi() {
  let wifiChoosed = "";
  const initialBitcoinState = {
    netWorkName: "test",
    password: "test",
    encription: "test",
  };
  const [wifiState, setWifiState] = useState(initialBitcoinState);
  const globalState = useContext(store);
  const { dispatch } = globalState;

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
  useEffect(() => {
    wifiCheckBox.map((item) => {
      if (item.isChecked) {
      return wifiChoosed = item.value
    }
    });
    setWifiState({ ...wifiState, encription: wifiChoosed });
  }, [wifiCheckBox]);
  const handleFormSubmit = () => {
    dispatch({ type: "ADD_TEXT", payload: convertObjectToText(wifiState) });
  };
  const handleInputChange = (e) => {
    setWifiState({ ...wifiState, [e.target.name]: e.target.value });
  };
  return (
    <>
      <UrlContainer>
        <Title>WiFi QR Code</Title>
        <form>
          <DefaultInput
            type="text"
            name="netWorkName"
            placeholder="Network Name"
            onChange={handleInputChange}
          />

          <DefaultInput
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
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

      <UrlSubmitBtn onClick={handleFormSubmit}>Generate QR</UrlSubmitBtn>
    </>
  );
}
