import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

import Header from "@Screens/Home/Header";
import AddNewTaskInput from "@Screens/Home/AddNewTaskInput";
import TaskDataSummary from "@Screens/Home/TaskDataSummary";
import TaskList from "@Screens/Home/TaskList";

import * as S from "./styles";
import { useState } from "react";

export default function Home() {
  const theme = useTheme();
  const [text, setText] = useState("");
  const [data, setData] = useState<ItemTaskProps[]>([]);

  const handleCreateNewTask = () => {
    const newValue = data.slice();
    newValue.push({ id: data.length + 1, done: false, label: text });
    setData(newValue);
    setText("");
  };

  const handleFinishTaskAsDone = (id: number) => {
    const newValue = data.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setData(newValue);
  };

  const handleDeleteTask = (id: number) => {
    const newValue = data.filter((item) => item.id !== id);
    setData(newValue);
  };

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: theme.gray_700 }}
        edges={{ bottom: "off", top: "maximum" }}
      >
        <S.Container>
          <Header />
          <S.BodyContainer>
            <AddNewTaskInput
              handleCreateNewTask={handleCreateNewTask}
              text={text}
              setText={setText}
            />
            <TaskDataSummary
              created={data.length}
              done={data.filter((item) => item.done).length}
            />
            <TaskList
              handleFinishTaskAsDone={handleFinishTaskAsDone}
              handleDeleteTask={handleDeleteTask}
              data={data}
            />
          </S.BodyContainer>
        </S.Container>
      </SafeAreaView>
    </>
  );
}
