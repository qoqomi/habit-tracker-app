import styled from "@emotion/native";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { TextInput, TextInputProps } from "react-native";

interface TextfieldProps extends TextInputProps {}
export const _Textfield: ForwardRefRenderFunction<TextInput, TextfieldProps> = (
  _props = {},
  ref
) => {
  const { ...props } = _props;

  return (
    <Container>
      <StyledInput ref={ref} {...props} allowFontScaling />
    </Container>
  );
};

export const TextField = forwardRef(_Textfield);

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledInput = styled(TextInput)`
  flex: 1;
`;
