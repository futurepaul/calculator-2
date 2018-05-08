import React from "react";
import { Consumer, copy, save } from "./state";

export const AnswerBox = ({ answer }) => (
  <Consumer>
    {state => (
      <div>
        <div className="answer">
          <p>{state.answer}</p>
          <div className="buttons">
            <button className="save" onClick={save}>
              save
            </button>
            <button className="copy" onClick={() => copy(state.answer)}>
              copy
            </button>
          </div>
        </div>
      </div>
    )}
  </Consumer>
);
