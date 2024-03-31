import PlusIconSVG from "@Assets/icons/plus.svg";

import * as S from "./styles";

interface Props {
  handleCreateNewTask: (v: string) => void;
  text: string;
  setText: (t: string) => void;
}

export default function AddNewTaskInput({
  handleCreateNewTask = () => undefined,
  text = "",
  setText = () => null,
}: Props) {
  return (
    <S.Container>
      <S.TextFieldContainer>
        <S.TextField
          placeholder="Adicione uma nova tarefa"
          value={text}
          onChangeText={setText}
        />
      </S.TextFieldContainer>
      <S.AddButton onPress={handleCreateNewTask}>
        <PlusIconSVG />
      </S.AddButton>
    </S.Container>
  );
}
