import { useSnapshot } from 'valtio';

import { CounterStore } from './store';

export const useCounterSnapshot = () => useSnapshot(CounterStore) as typeof CounterStore;
