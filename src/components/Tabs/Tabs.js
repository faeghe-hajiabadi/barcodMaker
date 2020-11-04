import React, { useState } from "react";
import styled from "styled-components";
import Tab from "./Tab";
export default function Tabs(props) {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);
  const { children } = props;
  const TabList = styled.ol`
   padding-left: 0;
   display:flex;
   justify-content:center;
   align-items:center;
   /* background-color:red; */
  `;
  const TabsStyled = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); 
  grid-template-rows: repeat(1, 500px);
  grid-gap: 1rem;
  grid-auto-flow: dense;
  
  `
  const TabListBox = styled.div`
  background-color:#FFFFFF;
  border-radius:100;
  display:flex;
  flex-direction:column;
  width:120px;
  justify-content:space-evenly;
  align-items: center;
  border-radius: 100px;
  height:100%;

  
  `
  
  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };
  return (
    <TabsStyled >
      <TabList className='test'>
        <TabListBox>
        {children.map((child) => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClickProps={onClickTabItem}
            />
          );
        })}
        </TabListBox>
      </TabList>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </TabsStyled>
  );
}
