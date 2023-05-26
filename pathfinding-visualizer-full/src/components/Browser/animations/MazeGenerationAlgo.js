import React, { useEffect } from "react";

const MazeGenerationAnimations = ({ board }) => {
  useEffect(() => {
    const nodes = [...board.wallsToAnimate];
    const speed =
      board.speed === "fast"
        ? 5
        : board.speed === "average"
        ? 25
        : 75;

    const timeout = (index) => {
      setTimeout(() => {
        if (index === nodes.length) {
          board.wallsToAnimate = [];
          board.toggleButtons();
          return;
        }
        nodes[index].className =
          board.nodes[nodes[index].id].weight === 15
            ? "unvisited weight"
            : "wall";
        timeout(index + 1);
      }, speed);
    };

    timeout(0);

    // Clean up the animation when the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, [board]);

  return null; // or any JSX content if needed
};

export default MazeGenerationAnimations;
