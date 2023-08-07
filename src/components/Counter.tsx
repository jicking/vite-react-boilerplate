import { $counter, increase } from "../store/counter";
import { useStore } from "@nanostores/react";

export function Counter() {
	const counter = useStore($counter);
	const count = counter.count;

  return (
    <button onClick={() => increase(1)} className="btn">
      count is {count}
    </button>
  );
}
