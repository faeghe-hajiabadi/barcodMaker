import React from "react";
import styled from "styled-components";


const TabListItem = styled.div`
  /* display: inline-block; */
  list-style: none;
  margin-bottom: -1px;
  /* padding: 10px; */
  border-radius: 100px;
`;
const TabListNormal = styled.div`
  border-radius: 100px;
  width: 64px;
  height: 64px;
  color: #ffffff;
  border-width: 1px 1px 0 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TabListActive = styled.li`
  background: #03268a;
  border-radius: 100px;
  width: 57px;
  height: 57px;
  color: #ffffff;
  border-width: 1px 1px 0 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Tab(props) {
  const { label, activeLabel, activeTab, onClickProps } = props;
  const onClick = () => {
    onClickProps(label);
  };

  if (activeTab === label) {
    return (
      <TabListItem onClick={onClick}>
        <TabListActive>
          <img width="20px" src={activeLabel}></img>
        </TabListActive>
      </TabListItem>
    );
  } else {
    return (
      <TabListItem onClick={onClick}>
        <TabListNormal>
          <img width="20px" src={label} alt='tab label'></img>
        </TabListNormal>
      </TabListItem>
    );
  }
}
