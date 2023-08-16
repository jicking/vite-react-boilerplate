import { $counter, increase, decrease, reset } from '../store/counter'
import { useStore } from '@nanostores/react'

export function Counter() {
	const counter = useStore($counter)
	const count = counter.count

	return (
		<div>
			<button onClick={() => increase(1)} className="btn">
				Increase
			</button>

			<button onClick={() => decrease(1)} className="btn">
				Decrease
			</button>

			<button onClick={() => reset()} className="btn">
				Reset
			</button>

			<p>Count is {count}</p>
		</div>
	)
}
