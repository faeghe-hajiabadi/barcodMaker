import React, { useState } from 'react';
import QRCode from 'qrcode.react';


function BarCodeGenerator(props) {
  // const value = props;
  const initialState = {
    NetworkName: "",
    Password: "",
    Encryption: {
      None: "",
      WPAWPA2: "",
      WEP: ""
    },
    isMember: false
  };
  const [ value, setValue ] = useState(initialState);
  const [formValue,setFormValue ] = useState('test')

  const mySubmitHandler = (event) => {
    event.preventDefault();
    console.log("this is form",event.target)
    setFormValue(value)
    console.log("value",value)
    // setValue(event.target.value);
  }
  const myChangeHandler = (event) => {
    setValue({...value,[event.target.name]: event.target.value})
    console.log("value",{value})

  }
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
  const downloadQRSVG = ()=> {
    convertCanvasToImage()
  }
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
      var svgAsXML = (new XMLSerializer).serializeToString(svg);
      return "data:image/svg+xml," + encodeURIComponent(svgAsXML);
    }
  return (
    <div className="App">
      <form onSubmit={mySubmitHandler}>
      
      <input
        type='text'
        name='NetworkName'
        onChange={myChangeHandler}
      />
       <input
        type='password'
        name='password'
        onChange={myChangeHandler}
      />
      <input
        type='submit'
      />
      </form>
      <QRCode id='123456' value= {JSON.stringify(formValue)}/>
 
     
     <a onClick={downloadQR}> Download QR </a>
     <a onClick={downloadQRSVG}> Download QR SVG </a>

    </div>
  );
}

export default BarCodeGenerator;
