"use client";

import styled from "styled-components";

interface IRow {
  align?: string;
  gap?: string;
}

export const Row = styled("div")<IRow>(({ align, gap }) => ({
  display: "flex",
  position: "relative",
  alignItems: align || "center",
  gap: gap || "unset",
}));

interface IText {
  display?: string;
  margin?: string;
  cursor?: string;
  width?: string;
  textalign?: string;
  size?: string;
  weight?: string;
  minwidth?: string;
  color?: string;
  wordbreak?: string;
  whitespace?: string;
  textoverflow?: string;
  overflow?: string;
}

export const Text = styled("p")<IText>(
  ({
    display,
    margin,
    cursor,
    width,
    textalign,
    size,
    weight,
    minwidth,
    color,
    wordbreak,
    whitespace,
    textoverflow,
    overflow,
  }) => ({
    display: display || "block",
    margin: margin || "0px",
    cursor: cursor || "unset",
    width: width || "unset",
    textAlign: (textalign as any) || "unset",
    fontSize: size || "14px",
    fontWeight: weight || "normal",
    minWidth: minwidth || "unset",
    color: color || "black",
    wordBreak: (wordbreak as any) || "normal",
    whiteSpace: (whitespace as any) || "normal",
    textOverflow: textoverflow || "normal",
    overflow: overflow || "normal",
  })
);
