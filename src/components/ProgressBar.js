import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 80%;
  margin: auto;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background: blue;
    z-index: -1;
  }
`;
const Mark = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 30px;
    height: 15px;
    border-left: 3px solid;
    border-bottom: 3px solid;
    transform: rotate(-45deg) translate(3px, -3px);
    transform-origin: center;
  }
`;
const MarkDone = styled(Mark)`
  background: blue;
  border-color: blue;
  &:after {
    border-color: #fff;
  }
`;
const MarkCurrent = styled(Mark)`
  border-color: blue;
  &:after {
    border-color: blue;
  }
`;
const MarkDisabled = styled(Mark)`
  border-color: #aaa;
  &:after {
    border-color: #aaa;
  }
`;
const ProgressBar = ({
  steps,
  current,
  labelDone,
  labelCurrent,
  labelDisabled
}) => {
  if (!labelDone) labelDone = <MarkDone />;
  if (!labelCurrent) labelCurrent = <MarkCurrent />;
  if (!labelDisabled) labelDisabled = <MarkDisabled />;
  return (
    <Wrapper>
      {Array(steps)
        .fill(null)
        .map((el, idx) => {
          let label = labelDisabled;
          if (current > idx + 1) label = labelDone;
          if (current === idx + 1) label = labelCurrent;
          return label;
        })}
    </Wrapper>
  );
};

export default ProgressBar;
