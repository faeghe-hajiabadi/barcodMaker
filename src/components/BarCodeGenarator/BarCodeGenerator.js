import React, { useState, useEffect } from "react";

import styled, { css } from "styled-components";
import "./barcodeGenerator.scss";
import QRCode from "easyqrcodejs";
import downArrow from "../../img/arrowDown.png";

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
  margin-top: 10%;
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
const BarcodeTitleInput = styled.input`
  width: 100%;
  background: transparent;
  height: 50px;
  border: none;
  color: white;
  border-bottom: 2px solid #ddeaf9;
  &::placeholder {
    color: white;
  }
  &:focus-visible {
    outline: none;
  }
`;
const PngSave = styled.button`
  ${DefaultBtn};
  background: #3dbcf9;
`;
const BarcodeColorInput = styled.input`
  ${BarcodeTitleInput};
`;
function BarCodeGenerator(props) {
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
  const [color, setColor] = useState({
    darkColor: "#000000",
    lightColor: "#FFFFFF",
    topLeft: "#b7d28d",
    topRight: "#c17e61",
    bottomLeft: "#aa5b71",
  });

  const [qrOptions, setQrOptions] = useState({
    text: "faeghe haji",
    title: "",
    width: 180,
    height: 180,
    colorDark: "#000000",
    colorLight: "#FFFFFF",
    PO_TL: "#b7d28d",
    PO_TR: "#c17e61",
    PO_BL: "#aa5b71",
    logo:''
  });

  const [uploadedImage, setUploadedImage] = useState({
    image: "",
  });
  const [qrcode, setQrcode] = useState();
  const [qrcodeDOM, setQrcodeDOM] = useState();

  useEffect(() => {
    setQrcodeDOM(React.createRef());
  }, {});

  useEffect(() => {
    console.log("qrcode", qrcode);
    generate();
  }, [qrOptions, qrcodeDOM]);

  const generate = () => {
    if (!qrcodeDOM) {
      return;
    }
    console.log("qrcode", qrcode);
    if (qrcode) {
      console.log("not empty", qrcode);
      qrcode.clear();
    }

    setQrcode(new QRCode(qrcodeDOM.current, qrOptions));
  };
  const mySubmitHandler = (event) => {
    event.preventDefault();
    console.log("this is form", event.target);
    setFormValue(value);
    console.log("value", value);
    // setValue(event.target.value);
  };
  // const myChangeHandler = (event) => {
  //   setValue({ ...value, [event.target.name]: event.target.value });
  //   console.log("value", { value });
  // };
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
    console.log("this isINDEX in parent; ", index);
    const newArr = [...isOpen];
    newArr[index] = !newArr[index];
    for (let i = 0; i < newArr.length; i++) {
      if (i !== index) {
        newArr[i] = false;
      }
    }
    console.log("this is new state", newArr);
    setOpen(newArr);
  };
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      setUploadedImage(file);
      setQrOptions((prevState) => ({
        ...prevState,
        logo: uploadedImage,
      }));
    }
  };

  console.log("this is state", qrOptions);
  return (
    <App>
      <BarcodeContainer>
        <span id="qrcode" ref={qrcodeDOM}></span>

        <form className="barcodegenerator-form" onSubmit={mySubmitHandler}>
          <div className="wrapper">
            <Accordion
              title="Title"
              toggleAccordion={() => toggleAccordion(0)}
              isOpen={isOpen[0]}
            >
              <BarcodeTitleInput placeholder="Enter your barcode title here"></BarcodeTitleInput>
            </Accordion>
            <Accordion
              title="Shape"
              toggleAccordion={() => toggleAccordion(1)}
              isOpen={isOpen[1]}
            >
              <div className="accordion-content-child">
                <span>Dark Color</span>
                <BarcodeColorInput
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value={qrOptions.colorDark}
                  onChange={(e) => {
                    const { value } = e.target;
                    setQrOptions((prevState) => ({
                      ...prevState,
                      colorDark: value,
                    }));
                  }}
                ></BarcodeColorInput>
              </div>
              <div className="accordion-content-child">
                <span>Light Color</span>
                <BarcodeColorInput
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value={qrOptions.colorLight}
                  onChange={(e) => {
                    const { value } = e.target;
                    setQrOptions((prevState) => ({
                      ...prevState,
                      colorLight: value,
                    }));
                  }}
                ></BarcodeColorInput>
              </div>
              <div className="accordion-content-child">
                <span>Top-right Color</span>
                <BarcodeColorInput
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value={qrOptions.PO_TL}
                  onChange={(e) => {
                    const { value } = e.target;
                    setQrOptions((prevState) => ({
                      ...prevState,
                      PO_TL: value,
                    }));
                  }}
                ></BarcodeColorInput>
              </div>
              <div className="accordion-content-child">
                <span>Top-left Color</span>
                <BarcodeColorInput
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value={qrOptions.PO_TR}
                  onChange={(e) => {
                    const { value } = e.target;
                    setQrOptions((prevState) => ({
                      ...prevState,
                      PO_TR: value,
                    }));
                  }}
                ></BarcodeColorInput>
              </div>
              <div className="accordion-content-child">
                <span>Bottom-left Color</span>
                <BarcodeColorInput
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value={qrOptions.PO_BL}
                  onChange={(e) => {
                    const { value } = e.target;
                    setQrOptions((prevState) => ({
                      ...prevState,
                      PO_BL: value,
                    }));
                  }}
                ></BarcodeColorInput>
              </div>
            </Accordion>

            <Accordion
              title="Logo"
              toggleAccordion={() => toggleAccordion(2)}
              isOpen={isOpen[2]}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                multiple="false"
              />
            </Accordion>
          </div>
          <ButtonsContainer>
            <SvgSave>Save SVG</SvgSave>
            <PngSave>Save Png</PngSave>
          </ButtonsContainer>
        </form>

        {/* <a onClick={downloadQR}> Download QR </a>
        <a onClick={downloadQRSVG}> Download QR SVG </a> */}
      </BarcodeContainer>
    </App>
  );
}
const Accordion = ({ title, index, children, isOpen, toggleAccordion }) => {
  // const [isOpen, setOpen] = React.useState(isOpen);
  function toggleAccordionChild() {
    console.log("clicked in child component");
    toggleAccordion();
  }
  return (
    <div className="accordion-wrapper">
      <div className="title-wrapper" onClick={toggleAccordionChild}>
        <div className={`accordion-title ${isOpen ? "open" : ""}`}>
          <div>{title}</div>
        </div>
        <img width="10" src={downArrow}></img>
      </div>

      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

export default BarCodeGenerator;
