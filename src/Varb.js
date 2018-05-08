import React from "react";

export const Varb = ({ varb, click }) => (
  <div className="varb" onClick={() => click(varb.id)}>
    {varb.name} <strong>{varb.value}</strong>
  </div>
);
