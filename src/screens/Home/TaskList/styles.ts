import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

import ClipboardIconSVG from "@Assets/icons/clipboard.svg";
import TrashIconSVG from "@Assets/icons/trash.svg";
import CheckedIconSVG from "@Assets/icons/checked.svg";
import UncheckedIconSVG from "@Assets/icons/unchecked.svg";

interface TaskCardTextProps {
  done: boolean;
}

export const TaskListContainer = styled.FlatList`
  flex: 1;
`;

export const TaskCardContainer = styled.View`
  border-color: ${({ theme }) => theme.gray_400};
  border-width: 1px;
  border-radius: 8px;
  height: ${RFPercentage(3)}px;
  background-color: ${({ theme }) => theme.gray_500};
  height: 64px;
  padding: 12px 8px 12px 0px;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 8px;
`;

export const CheckboxContainer = styled.Pressable`
  align-items: center;
  justify-content: center;
  padding: 0 4px 0 15.27px;
`;

export const CheckedIcon = styled(CheckedIconSVG).attrs({
  width: 18,
  height: 18,
})``;
export const UncheckedIcon = styled(UncheckedIconSVG).attrs({
  width: 18,
  height: 18,
})``;

export const TextContainer = styled.View`
  flex: 1;
`;

export const TaskCardText = styled.Text.attrs({
  numberOfLines: 2,
})<TaskCardTextProps>`
  text-decoration-line: ${({ done }) => (done ? "line-through" : "none")};
  text-decoration-color: ${({ theme }) => theme.gray_300};
  color: ${({ theme, done }) => (done ? theme.gray_300 : theme.gray_100)};
  font-size: ${RFValue(12)}px;
  font-weight: 400;
`;

export const TrashContainer = styled.Pressable`
  padding: 0px 10px;
  align-items: center;
  justify-content: center;
`;

export const TrashIcon = styled(TrashIconSVG)``;

// EMPTY TASK LIST

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px;
`;

export const ClipboardIcon = styled(ClipboardIconSVG).attrs({
  width: 56,
  height: 56,
})`
  margin: 40px 0 16px 0;
`;

export const TitleEmptyMessage = styled.Text`
  color: ${({ theme }) => theme.gray_300};
  font-size: ${RFValue(12)}px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const SubtitleEmptyMessage = styled.Text`
  color: ${({ theme }) => theme.gray_300};
  font-size: ${RFValue(12)}px;
  font-weight: 400;
`;
