import type { FC } from 'react';
import type { Props } from './types';

export const Counter: FC<Props> = (props) => {
  const { count, onIncrement, onDecrement } = props;

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        Current Count: <span className="font-bold">{count}</span>
      </div>
      <div className="flex flex-row gap-4 mt-4">
        <button
          className="cursor-pointer p-4 rounded-xl border-0 bg-blue-200 hover:bg-blue-100 transition-colors"
          onClick={onIncrement}
          type="button"
        >
          Increment
        </button>
        <button
          className="cursor-pointer p-4 rounded-xl border-0 bg-blue-200 hover:bg-blue-100 transition-colors"
          onClick={onDecrement}
          type="button"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
