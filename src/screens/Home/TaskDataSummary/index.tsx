import { Text } from "react-native";
import * as S from "./styles";
import { DefaultTheme, useTheme } from "styled-components/native";

interface Props {
  created: number;
  done: number;
}

export default function TaskDataSummary({ created = 0, done = 0 }: Props) {
  const theme: DefaultTheme = useTheme();
  return (
    <S.Container>
      <S.Card>
        <S.LabelText color={theme.blue}>Criadas</S.LabelText>
        <S.DataValueContainer>
          <S.DataValue>{created}</S.DataValue>
        </S.DataValueContainer>
      </S.Card>
      <S.Card>
        <S.LabelText color={theme.purple}>Concluídas</S.LabelText>
        <S.DataValueContainer>
          <S.DataValue>{done}</S.DataValue>
        </S.DataValueContainer>
      </S.Card>
    </S.Container>
  );
}
