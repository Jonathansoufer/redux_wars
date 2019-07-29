import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #272b30;
  justify-content: space-around;
  align-items: stretch;
  border-bottom-width: 1;
  border-bottom-color: #ffe202;
`;

export const ItemText = styled.Text`
  color: #ffe202;
  font-size: 20px;
  font-weight: 400;
  padding-top: 10px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;
`;
