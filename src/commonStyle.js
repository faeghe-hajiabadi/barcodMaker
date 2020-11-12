import styled, { css } from "styled-components";

export const Label = styled.label`
  font-size: 14px;
  color: #a4b6d4;
`;
export const BigLabel = styled.label`
  font-size: 16px;
  color: #a4b6d4;
`;
export const UrlContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  align-content: space-between;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: #03288a;
  margin-bottom: 80px;
`;
export const Input = css`
  width: 100%;
  background: transparent;
  height: 50px;
  border: none;
  border-bottom: 2px solid #ddeaf9;
  ::placeholder {
    color: #a4b6d4;
    font-size: 16px;
  }
`;
export const DefaultInput = styled.input`
  ${Input};
`;
export const HalfInput = styled.input`
  ${Input};
  width: 49%;
`;
export const MessageInput = styled.textarea`
  ${Input};
  padding-top: 10px;
  height: 170px;
  ::placeholder {
    color: #a4b6d4;
    font-size: 16px;
  }
`;

export const UrlSubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  background: #03278a;
  width: 263px;
  height: 83px;
  border-radius: 100px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  color: #a4b6d4;
  font-size: 16px;
`;
export const Text = styled.div`
  text-size: 14px;
  color: #999d9f;
`;
