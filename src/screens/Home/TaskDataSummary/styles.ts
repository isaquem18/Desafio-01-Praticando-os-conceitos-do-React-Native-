import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { height } = Dimensions.get("screen");

interface LabelTextProps {
  color?: string;
}

export const Container = styled.View`
  width: 100%;
  padding: 32px 0 24px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.gray_400};
  justify-content: space-between;
  flex-direction: row;
`;

export const Card = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LabelText = styled.Text<LabelTextProps>`
  color: white;
  margin-right: 8px;
  font-size: ${RFValue(14)}px;
  font-weight: 700;
  color: ${({ color, theme }) => (color ? color : theme.gray_100)};
`;

export const DataValueContainer = styled.View`
  background-color: ${({ theme }) => theme.gray_400};
  padding: 2px 8px;
  border-radius: 999px;
`;

export const DataValue = styled.Text`
  color: white;
  font-size: ${RFValue(12)}px;
  font-weight: 700;
`;
