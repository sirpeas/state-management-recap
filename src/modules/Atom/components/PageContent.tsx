import { Counter } from 'modules/common/components/Counter';
import { useCounterAtom } from 'modules/Atom/state/Counter';

function PageContent() {
  const [count, setCount] = useCounterAtom();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-semibold">Atom – Jotai</h1>
      <div className="flex flex-row mt-8">
        <Counter
          count={count.value}
          onIncrement={() => setCount((prev) => ({ value: prev.value + 1 }))}
          onDecrement={() => setCount((prev) => ({ value: prev.value - 1 }))}
        />
      </div>
    </div>
  );
}
export default PageContent;
