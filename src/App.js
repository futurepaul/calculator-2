import React, { Component } from "react";
import MathJax from "react-mathjax2";
import {
  Provider,
  Consumer,
  save,
  createMutator,
  doMath,
  solve,
  copy,
  pick
} from "./state";
import "./App.css";

const Rows = () => (
  <Consumer selector={state => state.inputs}>
    {inputs => inputs.map(input => <Row key={input.id} id={input.id} />)}
  </Consumer>
);

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
              <Varb
                name={input.varb.name}
                value={input.varb.value}
                id={input.varb.id}
              />
              <button className="x" onClick={this.remove}>
                {" "}
                X{" "}
              </button>
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

const Algorithm = ({ algorithm }) => (
  <div>
    <h3 className="algorithm">{algorithm.name}</h3>
    <div className="algorithm">
      <p>{algorithm.formula}</p>
      <p>{algorithm.mathjax}</p>
    </div>
  </div>
);

const Answer = ({ answer }) => (
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

class Drawer extends React.Component {
  render() {
    return (
      <Consumer selector={state => state.showVariables.state}>
        {show =>
          show ? (
            <div className="drawer">
              <h3>{this.props.title}</h3>
              <ul>
                <Consumer selector={state => state.varbs}>
                  {varbs =>
                    varbs.map(varb => (
                      <li>
                        <Varb
                          key={varb.id}
                          id={varb.id}
                          name={varb.name}
                          value={varb.value}
                        />
                      </li>
                    ))
                  }
                </Consumer>
              </ul>
            </div>
          ) : null
        }
      </Consumer>
    );
  }
}

const Varb = ({ name, value, id }) => (
  <div className="varb" onClick={() => pick(id)}>
    {name} <strong>{value}</strong>
  </div>
);

const pendulum = {
  name: "period of a pendulum",
  formula: "time = 2 * pi * sqrt(length / gravity)",
  algorithm: (length, gravity) => 2 * Math.PI * Math.sqrt(length / gravity),
  mathjax: (
    <MathJax.Context input="ascii">
      <MathJax.Node>{"T ~~ 2pi sqrt(L/g)"}</MathJax.Node>
    </MathJax.Context>
  )
};

const Info = () => (
  <footer>
    <hr />
    built by @futurepaul<br />
    <a href="http://mathjs.org">math.js</a> and{" "}
    <a href="https://www.mathjax.org/">mathjax</a> do most of the work.
  </footer>
);

class App extends Component {
  render() {
    return (
      <Provider>
        <main>
          <header>
            <h1>Calculator 2</h1>
            <hr />
          </header>
          <Rows />

          <Algorithm algorithm={pendulum} />
          <Answer answer="2" />
          <Drawer title="variables" />
        </main>
      </Provider>
    );
  }
}

export default App;
