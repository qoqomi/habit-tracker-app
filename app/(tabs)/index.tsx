import { HabitCard } from "@/features/home/components/HabitCard";
import styled from "@emotion/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <Container>
      <SafeAreaView edges={["top"]} />

      <HabitCard label="오늘의 할일" checkValue={true} />
    </Container>
  );
}

const Container = styled.View`
  padding: 8px 16px;
  flex: 1;
`;
