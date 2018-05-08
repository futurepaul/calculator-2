import React from "react";

export const AlgorithmDisplay = ({ algorithm }) => (
  <div>
    <h3 className="algorithm">{algorithm.name}</h3>
    <div className="algorithm">
      <p>{algorithm.formula}</p>
      <p>{algorithm.mathjax}</p>
    </div>
  </div>
);
