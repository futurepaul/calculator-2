import createState from "react-copy-write";
import math from "mathjs-expression-parser";

export const initialState = {
  answer: "???",
  inputs: [
    {
      id: 0,
      name: "length",
      placeholder: "1 + 1",
      value: "",
      computedValue: 2,
      varb: null
    },
    {
      id: 1,
      name: "gravity",
      placeholder: "9.14",
      value: "",
      computedValue: 9.14,
      varb: null
    }
  ],
  varbs: [
    { id: 0, name: "bagels", value: "42", type: "number" },
    { id: 1, name: "more bagels", value: "43", type: "number" },
    {
      id: 2,
      name: "super long and inconvenient bagels",
      value: "9.14",
      type: "number"
    },
    { id: 3, name: "more bagels", value: "43", type: "number" },
    { id: 4, name: "more bagels", value: "43", type: "number" },
    { id: 5, name: "more bagels", value: "43", type: "number" },
    { id: 6, name: "more bagels", value: "43", type: "number" },
    { id: 7, name: "more bagels", value: "43", type: "number" },
    { id: 8, name: "more bagels", value: "43", type: "number" },
    { id: 9, name: "more bagels", value: "43", type: "number" },
    { id: 10, name: "more bagels", value: "43", type: "number" },
    { id: 11, name: "more bagels", value: "43", type: "number" },
    { id: 12, name: "more bagels", value: "43", type: "number" },
    { id: 13, name: "more bagels", value: "43", type: "number" },
    { id: 14, name: "more bagels", value: "43", type: "number" },
    { id: 15, name: "more bagels", value: "43", type: "number" },
    { id: 16, name: "more bagels", value: "43", type: "number" }
  ],
  showVariables: { state: false, id: 0 }
};

export const { Provider, Consumer, update, createMutator } = createState(
  initialState
);

// actions:
export const save = () => {
  const name = prompt("name this variable");
  if (name !== ("" || null)) {
    update(state => {
      const nextId = state.varbs.length;
      state.varbs.push({
        id: nextId,
        name: name,
        value: state.answer,
        type: "number"
      });
    });
  }
};

export const solve = inputs => {
  const gravity = inputs[0].computedValue;
  const length = inputs[1].computedValue;
  const algorithm = `2 * pi * sqrt(${gravity} / ${length})`;
  try {
    return math.eval(algorithm);
  } catch (err) {
    return "???";
  }
};

export const doMath = expression => {
  try {
    return math.eval(expression);
  } catch (err) {
    return "???";
  }
};

export const pick = id => {
  update(state => {
    const whichInput = state.showVariables.id;
    const whichVariable = id;
    state.inputs[whichInput].varb = state.varbs[whichVariable];
    state.inputs[whichInput].computedValue = state.varbs[whichVariable].value;
    state.answer = solve(state.inputs);
    state.showVariables.state = false;
  });
};

export const close = () => {
  update(state => {
    state.showVariables.state = false;
  });
};

export const copy = text => {
  if (
    document.queryCommandSupported &&
    document.queryCommandSupported("copy")
  ) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy"); // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
};
