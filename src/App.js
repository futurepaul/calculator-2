import React from "react";
import MathJax from "react-mathjax2";
import { Provider } from "./state";
import { CalculatorRows } from "./CalculatorRows";
import { AlgorithmDisplay } from "./AlgorithmDisplay";
import { AnswerBox } from "./AnswerBox";
import { VariablePicker } from "./VariablePicker";
import "./App.css";

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

const App = () => (
  <Provider>
    <main>
      <header>
        <h1>Calculator 2</h1>
        <hr />
      </header>
      <CalculatorRows />

      <AlgorithmDisplay algorithm={pendulum} />
      <AnswerBox answer="2" />
      <VariablePicker />
      <Info />
    </main>
  </Provider>
);

export default App;
