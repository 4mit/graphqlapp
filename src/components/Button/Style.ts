import styled from "styled-components";
export const BlockBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 1px 0px 10px rgb(0 0 0 / 19%), 0px 1px 4px rgb(0 0 0 / 23%);
  width: 100%;
  border: 1px solid green;
  padding: 1rem 0px;
  margin: 0.2rem 0px;
  &:hover {
    background-color: green;
    color: white;
  }
`;
export const BlockLinkBtn = styled.a`
  text-deroration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 1px 0px 10px rgb(0 0 0 / 19%), 0px 1px 4px rgb(0 0 0 / 23%);
  width: 100%;
  border: 1px solid green;
  padding: 1rem 0px;
  margin: 0.2rem 0px;
  &:hover {
    background-color: green;
    color: white;
  }
`;
export const buttonStyle = {
  padding: "1rem 0px",
  width: "100%",
};
