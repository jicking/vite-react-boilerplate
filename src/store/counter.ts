import { action } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

export interface Counter {
  count: number;
}

const defaultCounter: Counter = {
  count: 0,
};

export const $counter = persistentAtom<Counter>("counter", defaultCounter, {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export const increase = action($counter, "increase", (store, add: number) => {  
	const currentCount = store.get().count;
	const isMaxCountValue = currentCount + add >= 25;
	if (!isMaxCountValue) {
    store.set({ count: currentCount + 1 });
  }
  return store.get();
});

// $counter.set({count: 0})
