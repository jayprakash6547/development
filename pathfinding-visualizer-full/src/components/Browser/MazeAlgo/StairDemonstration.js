import React, { useEffect } from "react";

const StairDemonstration = ({ board }) => {
  useEffect(() => {
    const stairDemonstration = () => {
      let currentIdX = board.height - 1;
      let currentIdY = 0;
      let relevantStatuses = ["start", "target", "object"];
      while (currentIdX > 0 && currentIdY < board.width) {
        let currentId = `${currentIdX}-${currentIdY}`;
        let currentNode = board.nodes[currentId];
        let currentHTMLNode = document.getElementById(currentId);
        if (!relevantStatuses.includes(currentNode.status)) {
          currentNode.status = "wall";
          board.wallsToAnimate.push(currentHTMLNode);
        }
        currentIdX--;
        currentIdY++;
      }
      while (currentIdX < board.height - 2 && currentIdY < board.width) {
        let currentId = `${currentIdX}-${currentIdY}`;
        let currentNode = board.nodes[currentId];
        let currentHTMLNode = document.getElementById(currentId);
        if (!relevantStatuses.includes(currentNode.status)) {
          currentNode.status = "wall";
          board.wallsToAnimate.push(currentHTMLNode);
        }
        currentIdX++;
        currentIdY++;
      }
      while (currentIdX > 0 && currentIdY < board.width - 1) {
        let currentId = `${currentIdX}-${currentIdY}`;
        let currentNode = board.nodes[currentId];
        let currentHTMLNode = document.getElementById(currentId);
        if (!relevantStatuses.includes(currentNode.status)) {
          currentNode.status = "wall";
          board.wallsToAnimate.push(currentHTMLNode);
        }
        currentIdX--;
        currentIdY++;
      }
    };

    if (board) {
      stairDemonstration();
    }
  }, [board]);

  return null;
};

export default StairDemonstration;
