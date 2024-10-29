import styled from "@emotion/native";
import { useLocalSearchParams } from "expo-router";
import { TextInput } from "react-native";

export default function Page() {
  const { id } = useLocalSearchParams();

  return (
    <Container>
      <TextInput value="" />
    </Container>
  );
}

const Container = styled.View``;
