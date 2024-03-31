import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

export const Container = styled.View`
  width: 100%;
  height: ${height * 0.15}px;
  background-color: ${(props) => props.theme.gray_700};
  align-items: center;
  justify-content: center;
`;
