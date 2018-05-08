import React from "react";
import { Varb } from "./Varb";
import { Consumer, createMutator, doMath, solve } from "./state";

class Row extends React.Component {
  change = createMutator((draft, event) => {
    const input = draft.inputs[this.props.id];
    input.value = event.currentTarget.value;
    input.computedValue = doMath(event.currentTarget.value);
    draft.answer = solve(draft.inputs);
  });

  remove = createMutator((draft, event) => {
    draft.inputs[this.props.id].varb = null;
    //make sure to recompute the value
    draft.inputs[this.props.id].computedValue = doMath(
      draft.inputs[this.props.id].value
    );
    draft.answer = solve(draft.inputs);
  });

  showVariables = createMutator((draft, event) => {
    draft.showVariables.state = !draft.showVariables.state;
    draft.showVariables.id = this.props.id;
  });

  render() {
    const { id } = this.props;
    return (
      <Consumer selector={state => state.inputs[id]}>
        {input =>
          input.varb ? (
            <div className="calcRow">
              <div className="name">{input.name}</div>
              <Varb id={input.varb.id} varb={input.varb} click={this.remove} />
            </div>
          ) : (
            <div className="calcRow">
              <div className="name">{input.name}</div>
              <input
                placeholder={input.placeholder}
                value={input.value}
                onChange={this.change}
              />
              <button className="slider" onClick={this.showVariables}>
                ||
              </button>
            </div>
          )
        }
      </Consumer>
    );
  }
}

export const CalculatorRows = () => (
  <Consumer selector={state => state.inputs}>
    {inputs => inputs.map(input => <Row key={input.id} id={input.id} />)}
  </Consumer>
);
