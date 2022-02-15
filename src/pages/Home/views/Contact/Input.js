import React from "react";
import styled from "styled-components";
import useHighlight from "../../../../hooks/useHighlight";
import highlight from "../../../../utils/highlight";
import { theme } from "../../../../utils/theme";
import shadows from "../../../../utils/shadows";

const {
  colors: { cream, gray },
} = theme;

const Wrapper = styled.div({
  position: "relative",
});

const StyledLabel = styled.label(({ hasValue }) => ({
  color: gray,
  fontSize: hasValue ? 14 : 16,
  position: "absolute",
  left: 14,
  top: hasValue ? 0 : 32,
}));

const commonInputStyle = {
  ...shadows(1, true),
  background: cream,
  border: "none",
  boxSizing: "border-box",
  fontSize: 16,
  lineHeight: "140%",
  marginTop: 18,
  padding: "13px 14px",
  width: "100%",
};

const StyledInput = styled.input(({ highlighted }) => ({
  ...highlight(highlighted),
  ...commonInputStyle,
  height: 48,
}));

const StyledTextArea = styled.textarea(({ highlighted }) => ({
  ...highlight(highlighted),
  ...commonInputStyle,
  resize: "vertical",
}));

const Input = ({ id, label: labelText, textArea, labelWithValue }) => {
  const [value, setValue] = React.useState();
  const { highlighted, props } = useHighlight();

  const handleChange = ({ target: { value: inputValue } }) => {
    setValue(inputValue);
  };

  const isLine = !textArea;
  const inputId = `input-${id}`;
  const hasValue = !!value;

  return (
    <Wrapper>
      <StyledLabel for={inputId} hasValue={hasValue}>
        {hasValue ? labelWithValue : labelText || labelText}
      </StyledLabel>
      {isLine && (
        <StyledInput
          highlighted={highlighted}
          id={inputId}
          name="email"
          type="text"
          value={value}
          onChange={handleChange}
          {...props}
        />
      )}
      {textArea && (
        <StyledTextArea
          highlighted={highlighted}
          id={inputId}
          name="email"
          rows="4"
          value={value}
          onChange={handleChange}
          {...props}
        />
      )}
    </Wrapper>
  );
};

export default Input;
