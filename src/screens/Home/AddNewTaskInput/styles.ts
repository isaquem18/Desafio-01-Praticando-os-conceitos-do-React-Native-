import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 54px;
  margin-top: -27px;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

export const TextFieldContainer = styled.View`
  flex: 1;
  padding: 1px 1px;
`;

export const TextField = styled.TextInput.attrs<DefaultTheme>(({ theme }) => ({
  color: theme.gray_100,
  placeholderTextColor: theme.gray_300,
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.gray_500};
  border-radius: 6px;
  padding: 0px 14px;
`;

export const AddButton = styled.TouchableOpacity.attrs<DefaultTheme>({
  activeOpacity: 0.7,
})`
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.blue_dark};
  border-radius: 6px;
`;
