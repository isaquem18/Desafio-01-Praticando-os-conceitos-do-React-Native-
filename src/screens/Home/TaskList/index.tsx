import * as S from "./styles";
import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  ListRenderItemInfo,
} from "react-native";

interface TaskProps {
  done: boolean;
  text: string;
}

interface Props {
  data?: ItemTaskProps[];
  handleFinishTaskAsDone: (v: number) => void;
  handleDeleteTask: (v: number) => void;
}

export default function TaskList({
  data = [],
  handleFinishTaskAsDone = () => undefined,
  handleDeleteTask = () => undefined,
}: Props) {
  return (
    <S.TaskListContainer
      data={data}
      renderItem={
        (({ item }: ListRenderItemInfo<ItemTaskProps>) => {
          return (
            <S.TaskCardContainer>
              <S.CheckboxContainer
                onPress={() => handleFinishTaskAsDone(item.id)}
              >
                {item?.done ? <S.CheckedIcon /> : <S.UncheckedIcon />}
              </S.CheckboxContainer>

              <S.TextContainer>
                <S.TaskCardText done={item?.done}>{item.label}</S.TaskCardText>
              </S.TextContainer>

              <S.TrashContainer onLongPress={() => handleDeleteTask(item.id)}>
                <S.TrashIcon />
              </S.TrashContainer>
            </S.TaskCardContainer>
          );
        }) as any
      }
      ListEmptyComponent={() => (
        <S.EmptyContainer>
          <S.ClipboardIcon />
          <S.TitleEmptyMessage numberOfLines={1}>
            Você ainda não tem tarefas cadastradas
          </S.TitleEmptyMessage>
          <S.SubtitleEmptyMessage>
            Crie tarefas e organize seus itens a fazer
          </S.SubtitleEmptyMessage>
        </S.EmptyContainer>
      )}
    />
  );
}
