import { create } from 'zustand/react';
import { devtools } from 'zustand/middleware';

type CounterStore = {
  value: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounterStore = create<CounterStore>()(
  devtools((set) => ({
    value: 0,
    increment: () => set((state) => ({ value: state.value + 1 })),
    decrement: () => set((state) => ({ value: state.value - 1 })),
  }))
);
