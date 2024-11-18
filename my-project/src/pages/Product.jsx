import { useState } from "react";
import Button from "../component/Button";
import { Link } from "react-router-dom";

export default function Product() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="text-center text-white bg-slate-600 gap">
      <h1>My first Class</h1>
      <div>{count}</div>
      <Button onClick={increment} name="Increment" />
      <Button name="Decrement" onClick={decrement} />
      <Button name="Reset" onClick={reset} />
      <button className="p-3 bg-stone-400 rounded">
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}