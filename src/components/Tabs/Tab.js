import React from "react";
import styled from "styled-components";

export default function Tab(props) {
  const { label, activeTab, onClickProps } = props;
  const onClick = () => {
    onClickProps(label);
  };

  const tabListItem = styled.li`
    display: inline-block;
    list-style: none;
    margin-bottom: -1px;
    padding: 0.5rem 0.75rem;
  `;
  const tabListActive = styled.li`
    background-color: white;
    border: solid #ccc;
    border-width: 1px 1px 0 1px;
  `;

  if (activeTab === label) {
    return (
      <tabListItem onClick={onClick}>
        <tabListActive>{label}</tabListActive>
      </tabListItem>
    );
  } else {
    return <tabListItem onClick={onClick}>{label}</tabListItem>;
  }
}
