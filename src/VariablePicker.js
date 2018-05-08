import React from "react";
import { Varb } from "./Varb";
import { Consumer, pick, close } from "./state";
import "./VariablePicker.css";

export const VariablePicker = () => (
  <Consumer selector={state => state.showVariables.state}>
    {show =>
      show ? (
        <div>
          <div className="modal">
            <h3 className="drawer">Variables</h3>
            <div className="drawer">
              <ul>
                <Consumer selector={state => state.varbs}>
                  {varbs =>
                    varbs.map(varb => (
                      <li>
                        <Varb key={varb.id} varb={varb} click={pick} />
                      </li>
                    ))
                  }
                </Consumer>
              </ul>
            </div>
          </div>
          <div className="modalOverlay" onClick={close} />
        </div>
      ) : null
    }
  </Consumer>
);
