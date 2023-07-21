"use client";

import styled from "styled-components";

interface IMainWrapper {
  background?: string;
}

export const MainWrapper = styled("main")<IMainWrapper>(({ background }) => ({
  position: "relative",
  minHeight: "100vh",
  width: "100%",
  justifyContent: "center",
  alignItems: "flex-start",
  display: "flex",
  backgroundColor: background || "white",
}));
