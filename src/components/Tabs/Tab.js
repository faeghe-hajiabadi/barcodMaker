import React from "react";
import styled from "styled-components";

export default function Tab(props) {
  const { label, activeTab, onClickProps } = props;
  const onClick = () => {
    onClickProps(label);
  };

  const TabListItem = styled.li`
    /* display: inline-block; */
    list-style: none;
    margin-bottom: -1px;
    padding: 10px;
  `;
  const TabListActive = styled.li`
    background-color: white;
   
    border-width: 1px 1px 0 1px;
  `;

  if (activeTab === label) {
    return (
      <TabListItem onClick={onClick}>
        <TabListActive>
          <img width='20px' src={label} ></img>
        </TabListActive>
      </TabListItem>
    );
  } else {
    return <TabListItem onClick={onClick}><img width='20px' src={label}></img></TabListItem>;
  }
}
