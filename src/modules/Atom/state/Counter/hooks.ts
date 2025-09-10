import { counterAtom } from 'modules/Atom/state/Counter/atom';
import { useAtom } from 'jotai';

export const useCounterAtom = () => useAtom(counterAtom);
