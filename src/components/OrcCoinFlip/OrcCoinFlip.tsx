import React from "react";
import styled, { keyframes } from "styled-components";
import CoinIcon from "./CoinIcon";
import OrcIcon from "./OrcIcon";
import { OrcCoinFlipProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(40px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const RotatingCoinIcon = styled(CoinIcon)`
  position: absolute;
  top: 0;
  left: 110px;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
  width: 20px;
`;

const FloatingCoinIcon = styled.div`
  animation: ${float} 2s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const OrcCoinFlip: React.FC<OrcCoinFlipProps> = ({ size = 128 }) => {
  return (
    <Container>
      <FloatingCoinIcon>
        <RotatingCoinIcon width={`${size * 0.5}px`} />
      </FloatingCoinIcon>
      <OrcIcon width={`${size}px`} />
    </Container>
  );
};

export default OrcCoinFlip;
