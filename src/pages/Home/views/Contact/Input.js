import React from "react";
import styled from "styled-components";
import useHighlight from "../../../../hooks/useHighlight";
import highlight from "../../../../utils/highlight";
import { theme } from "../../../../utils/theme";
import shadows from "../../../../utils/shadows";

const { colors } = theme;

const {
  colors: { cream, dark, gray },
} = theme;

const Wrapper = styled.div({
  position: "relative",
});

const StyledLabel = styled.label(({ hasValue }) => ({
  color: hasValue ? dark : gray,
  fontSize: hasValue ? 14 : 16,
  padding: '0 4px',
  pointerEvents: 'none',
  position: "absolute",
  left: hasValue ? -2 : 12,
  top: hasValue ? 6 - 25 : 42 - 25,
  backgroundColor: hasValue ? cream : 'unser',
  zIndex: 1,
  // padding: hasValue ? '0px 4px' : 'unset',
}));

const commonInputStyle = {
  ...shadows(1, true),
  background: cream,
  border: "none",
  boxSizing: "border-box",
  fontSize: 16,
  lineHeight: "140%",
  // marginTop: 25,
  outline: 'none',
  padding: "13px 14px",
  width: "100%",
};

const StyledHighlighter = styled.div(({highlighted, color = colors.purple}) => {
  const baseStyle = {
    content: '""',
    width: "calc(100% + 8px)",
    height: "calc(100% + 8px)",
    pointerEvents: 'none',
    position: "absolute",
    top: -4,
    left: -4,
    transition: "box-shadow 0.3s",
  };

  return highlighted
    ? {
        outline: "none",
        "&:before": {
          ...baseStyle,
          boxShadow: `0 0 0 4px ${color}`,
          opacity: 1,
        },
      }
    : {
        outline: "none",
        "&:before": {
          ...baseStyle,
          boxShadow: `0 0 0 0 ${color}`,
          opacity: 0,
        },
      };
})

const StyledInput = styled.input({
  ...commonInputStyle,
  height: 48,
})

const StyledTextArea = styled.textarea(({ highlighted }) => ({
  ...highlight(highlighted),
  ...commonInputStyle,
  display: "block",
  margin: 0, 
  resize: "vertical",
}));

const Input = ({ id, name, label: labelText, textArea, labelWithValue }) => {
  const [value, setValue] = React.useState('');
  const { highlighted, props } = useHighlight();

  const handleChange = ({ target: { value: inputValue } }) => {
    setValue(inputValue);
  };

  const isLine = !textArea;
  const inputId = `input-${id}`;
  const hasValue = !!value;

  const highlightLabel = highlighted ? 'yes' : 'no'

  return (
    <Wrapper>
      <StyledLabel htmlFor={inputId} hasValue={hasValue}>
        {/* {highlightLabel} */}
        {hasValue ? labelWithValue : labelText || labelText}
      </StyledLabel>
      {isLine && (
        <StyledHighlighter
          highlighted={highlighted}        
        >
          <StyledInput
            highlighted={highlighted}
            id={inputId}
            name={name}
            type="text"
            value={value}
            onChange={handleChange}
            {...props}
          />
        </StyledHighlighter>

      )}
      {textArea && (
        
        <StyledHighlighter
          highlighted={highlighted}        
        >
          <StyledTextArea
            highlighted={highlighted}
            id={inputId}
            name={name}
            rows="4"
            value={value}
            onChange={handleChange}
            {...props}
          />
        </StyledHighlighter>
      )}
    </Wrapper>
  );
};

export default Input;
