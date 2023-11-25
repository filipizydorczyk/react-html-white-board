import React from "react";
import { WhiteBoardSpace } from "./components/WhiteBoardSpace";
import { WhiteBoardContainer } from "./components/WhiteBoardContainer";
import { useCanvasContainer } from "./hooks/useCanvasContainer";
import { X, Y } from "./constants";

interface ReactHtmlWhiteBoardProps {
  width: number;
  height: number;
}

export const ReactHtmlWhiteBoard = ({
  width,
  height,
}: ReactHtmlWhiteBoardProps) => {
  const { position, focus, unfocus, updateContainerPosition } =
    useCanvasContainer();
  return (
    <WhiteBoardSpace
      width={width}
      height={height}
      onMouseDown={focus}
      onMouseUp={unfocus}
      onMouseMove={updateContainerPosition}
    >
      <WhiteBoardContainer
        top={position[Y]}
        left={position[X]}
      ></WhiteBoardContainer>
    </WhiteBoardSpace>
  );
};
