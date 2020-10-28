import React, { useState } from "react";
import styled from "styled-components";
import Tab from "./Tab";
export default function Tabs(props) {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);
  const { children } = props;
  const tabList = styled.ol`
   padding-left: 0;
  `;
  
  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="tabs">
      <tabList>
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
      </tabList>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}
