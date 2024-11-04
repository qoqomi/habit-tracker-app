import { TextField } from "@/components/text-field/Textfield";
import { ThemeColor } from "@/constants/colors";
import styled from "@emotion/native";
import React, { useEffect, useRef } from "react";
import { TextInput } from "react-native";

interface InputHeaderProps {
  defaultValue: string;
  onChange?: (text: string) => void;
}
export const InputHeader = ({ defaultValue, onChange }: InputHeaderProps) => {
  const inputRef = useRef<TextInput>(null);
  const handleChangeText = (text: string) => {
    onChange?.(text);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <Header>
      <TextField
        defaultValue={defaultValue}
        placeholder="예)아침 루틴"
        ref={inputRef}
        multiline
        placeholderTextColor={ThemeColor.Gray4}
        style={{ fontSize: 24, fontWeight: 700, minHeight: 44 }}
        textAlignVertical="center"
        enterKeyHint="done"
        onChangeText={handleChangeText}
      />
    </Header>
  );
};

const Header = styled.View`
  border: 1px solid ${ThemeColor.Gray2};
  padding: 20px;
  border-radius: 16px;
`;
