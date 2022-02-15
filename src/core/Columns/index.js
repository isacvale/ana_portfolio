import React from "react";
import styled from "styled-components";
import { MAX_CONTENT_WIDTH, MIN_PADDING } from "../../constants";

const StyledColumns = styled.div(
  ({ columns, extraStyle, gap, gridArea, rows }) => ({
    boxSizing: "border-box",
    display: "grid",
    gridArea,
    gridTemplateColumns: columns ?? "repeat(12, 1fr)",
    gridTemplateRows: rows,
    gap,
    height: "100%",
    maxWidth: MAX_CONTENT_WIDTH,
    margin: "0 auto",
    padding: `0 ${MIN_PADDING}px`,
    ...extraStyle,
  })
);

const Columns = ({
  children,
  columns,
  gap = 16,
  rows,
  extraStyle,
  gridArea,
}) => {
  return (
    <StyledColumns
      extraStyle={extraStyle}
      columns={columns}
      rows={rows}
      gridArea={gridArea}
      gap={gap}
    >
      {children}
    </StyledColumns>
  );
};

export default Columns;
