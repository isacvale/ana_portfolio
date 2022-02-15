import { useState } from "react";

const useHighlight = () => {
  const [highlighted, setHighlighted] = useState(false);

  const props = {
    onMouseEnter: () => setHighlighted(true),
    onMouseLeave: () => setHighlighted(false),
    onFocus: () => setHighlighted(true),
    onBlur: () => setHighlighted(false),
  };

  return { highlighted, props };
};

export default useHighlight;
