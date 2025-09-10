import { Counter } from 'modules/common/components/Counter';
import { useCounterSnapshot, CounterStore } from 'modules/Proxy/store/Counter';

function PageContent() {
  const count = useCounterSnapshot();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-semibold">Proxy – Valtio</h1>
      <div className="flex flex-row mt-8">
        <Counter
          count={count.value}
          onIncrement={() => CounterStore.value = CounterStore.value + 1}
          onDecrement={() => CounterStore.value = CounterStore.value - 1}
        />
      </div>
    </div>
  );
}
export default PageContent;
