import { Counter } from 'modules/common/components/Counter';
import { useCounterStore } from 'modules/SimplifiedFlux/store/Counter';

function PageContent() {
  const { value, increment, decrement } = useCounterStore();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-semibold">Simplified Flux – Zustand</h1>
      <div className="flex flex-row mt-8">
        <Counter
          count={value}
          onIncrement={increment}
          onDecrement={decrement}
        />
      </div>
    </div>
  );
}
export default PageContent;
