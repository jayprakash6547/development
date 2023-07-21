import React from "react";

class Node extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.status = props.status;
    this.previousNode = null;
    this.path = null;
    this.direction = null;
    this.storedDirection = null;
    this.distance = Infinity;
    this.totalDistance = Infinity;
    this.heuristicDistance = null;
    this.weight = 0;
    this.relatesToObject = false;
    this.overwriteObjectRelation = false;

    this.otherid = props.id;
    this.otherstatus = props.status;
    this.otherpreviousNode = null;
    this.otherpath = null;
    this.otherdirection = null;
    this.otherstoredDirection = null;
    this.otherdistance = Infinity;
    this.otherweight = 0;
    this.otherrelatesToObject = false;
    this.otheroverwriteObjectRelation = false;
  }

  render() {
    // Render your Node component here
    return <div>{this.id}</div>;
  }
}

export default Node;
