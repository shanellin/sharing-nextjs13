"use client";

import styled, { keyframes } from "styled-components";

export default function Loading() {
  return (
    <SkeletonContainer>
      <SkeletonContent />
    </SkeletonContainer>
  );
}

const placeHolderShimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const SkeletonContainer = styled.div`
  display: flex;
  width: 500px;
  overflow: hidden;
  position: relative;
  margin: 20px 0px;
`;

const SkeletonContent = styled.div`
  height: 20px;
  width: 100%;
  background-color: #dcdcdc;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      #f6f7f8 50%,
      transparent 100%
    );
    animation: ${placeHolderShimmer} 1.5s linear infinite;
  }
`;
