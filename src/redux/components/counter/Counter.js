import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement} from "../redux-flow/actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;