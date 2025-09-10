import { proxy } from 'valtio';
import { devtools } from 'valtio/utils'

type CounterState = {
  value: number;
};

const initialState = { value: 0 };

export const CounterStore = proxy<CounterState>(initialState);
devtools(CounterStore, { name: 'CounterStore', enabled: true })
