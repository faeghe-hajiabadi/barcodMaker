import React, { useState } from "react";
import Tabs from "./components/Tabs/Tabs";
import styled from "styled-components";
import "./App.css";
import BarCodeGenerator from "./components/BarCodeGenarator/BarCodeGenerator";



function App() {
  return (
    <>
      <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
      <BarCodeGenerator />;
    </>
  );
}

export default App;
