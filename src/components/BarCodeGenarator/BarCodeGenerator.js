import React, { useState, useEffect } from "react";

import styled, { css } from "styled-components";
import "./barcodeGenerator.scss";
import QRCode from "easyqrcodejs";

const App = styled.div`
  display: flex;
  justify-content: center;
`;
const BarcodeContainer = styled.div`
  background: #03268a;
  border-radius: 22px;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 80%;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20%;
`;
const DefaultBtn = css`
  height: 70px;
  width: 130px;
  color: white;
  border-radius: 36px;
  border: none;
  font-size: 16px;
`;
const SvgSave = styled.button`
  ${DefaultBtn};
  background: #fe9b06;
`;
const PngSave = styled.button`
  ${DefaultBtn};
  background: #3dbcf9;
`;

function BarCodeGenerator(props) {
  const code = React.createRef();

  const [options, setOptions] = useState({
    text: "test meee btbtbtb",
    width: 209,
    height: 209,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
  useEffect(() => {
    new QRCode(code.current, options);
  }, [code, options]);

  // const value = props;
  const initialState = {
    NetworkName: "",
    Password: "",
    Encryption: {
      None: "",
      WPAWPA2: "",
      WEP: "",
    },
    isMember: false,
  };
  const [value, setValue] = useState(initialState);
  const [formValue, setFormValue] = useState("test");
  const [isOpen, setOpen] = useState([false, false, false]);

  const mySubmitHandler = (event) => {
    event.preventDefault();
    console.log("this is form", event.target);
    setFormValue(value);
    console.log("value", value);
    // setValue(event.target.value);
  };
  const myChangeHandler = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
    console.log("value", { value });
  };
  const downloadQR = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "123456.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const downloadQRSVG = () => {
    convertCanvasToImage();
  };
  function convertCanvasToImage() {
    const canvas = document.getElementById("123456");
    var dataURL = svgDataURL(canvas);
    var dl = document.createElement("a");
    document.body.appendChild(dl); // This line makes it work in Firefox.
    dl.setAttribute("href", dataURL);
    dl.setAttribute("download", "test.svg");
    dl.click();
  }
  function svgDataURL(svg) {
    var svgAsXML = new XMLSerializer().serializeToString(svg);
    return "data:image/svg+xml," + encodeURIComponent(svgAsXML);
  }
  const imageSettingsCode = { height: 20, width: 60, excavate: true };
  const toggleAccordion = (index) => {
    console.log("this isINDEX; ", index);
    setOpen((isOpen[index] = !isOpen[index]));
  };
  return (
    <App>
      <BarcodeContainer>
        <div ref={code}></div>

        <form onSubmit={mySubmitHandler}>
          <div className="wrapper">
            <Accordion
              title="Frame"
              toggleAccordion={toggleAccordion}
              isOpen={isOpen[0]}
              index={0}
            >
              Sunlight reaches Earth's atmosphere and is scattered in all
              directions by all the gases and particles in the air. Blue light
              is scattered more than the other colors because it travels as
              shorter, smaller waves. This is why we see a blue sky most of the
              time.
            </Accordion>
            <Accordion
              title="Shape"
              toggleAccordion={toggleAccordion}
              isOpen={isOpen[1]}
              index={0}
            >
              It's really hot inside Jupiter! No one knows exactly how hot, but
              scientists think it could be about 43,000°F (24,000°C) near
              Jupiter's center, or core.
            </Accordion>
            <Accordion
              title="Logo"
              toggleAccordion={toggleAccordion}
              isOpen={isOpen[2]}
              index={0}
            >
              A black hole is an area of such immense gravity that nothing --
              not even light -- can escape from it.
            </Accordion>
          </div>
        </form>
        <ButtonsContainer>
          <SvgSave>Save SVG</SvgSave>
          <PngSave>Save Png</PngSave>
        </ButtonsContainer>

        {/* <a onClick={downloadQR}> Download QR </a>
        <a onClick={downloadQRSVG}> Download QR SVG </a> */}
      </BarcodeContainer>
    </App>
  );
}
const Accordion = ({ title, index, children, isOpen, toggleAccordion }) => {
  // const [isOpen, setOpen] = React.useState(isOpen);
  function toggleAccordionChild() {
    toggleAccordion();
  }
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={(index) => toggleAccordionChild(index)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

export default BarCodeGenerator;
