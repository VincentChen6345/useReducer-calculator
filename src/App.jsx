import styles from "./App.module.css";
import React, { useReducer, useState } from "react";

const ACTIONS = {
  ADD: "add",
  SUBTRACT: "subtract",
  MULTIPLY: "multiply",
  DIVIDE: "divide",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return { count: state.count + action.payload.increment };

    case ACTIONS.SUBTRACT:
      return { count: state.count - action.payload.increment };
    case ACTIONS.DIVIDE:
      return {
        count: state.count / action.payload.increment,
      };
    case ACTIONS.MULTIPLY:
      return { count: state.count * action.payload.increment };
  }
};

function App() {
  const [increment, setIncrement] = useState("");
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const add = () => {
    dispatch({
      type: ACTIONS.ADD,
      payload: { increment: increment },
    });
  };
  const subtract = () => {
    dispatch({
      type: ACTIONS.SUBTRACT,
      payload: { increment: increment },
    });
  };
  const divide = () => {
    dispatch({
      type: ACTIONS.DIVIDE,
      payload: { increment: increment },
    });
  };
  const multiply = () => {
    dispatch({
      type: ACTIONS.MULTIPLY,
      payload: { increment: increment },
    });
  };
  const inputChangeHandler = (e) => {
    setIncrement(Number(e.target.value));
    console.log(increment);
    console.log(typeof increment);
  };
  const resetIncrement = () => {
    return setIncrement();
  };

  return (
    <div className={styles.App}>
      <main className={styles.container}>
        <input
          type="number"
          className={styles.input}
          onChange={inputChangeHandler}
          value={increment}
        ></input>
        <span>
          <button onClick={add} className={styles.button}>
            +
          </button>
          <button onClick={subtract} className={styles.button}>
            -
          </button>
          <button onClick={divide} className={styles.button}>
            ÷
          </button>
          <button className={styles.button} onClick={multiply}>
            x
          </button>
        </span>
        <span className={styles.label}>Total sum</span>
        <div className={styles.sum}>{state.count}</div>
      </main>
    </div>
  );
}

export default App;
