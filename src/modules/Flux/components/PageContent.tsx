import { Counter } from 'modules/common/components/Counter';
import { decrementCounterAction, incrementCounterAction } from 'modules/Flux/store/counter';
import { useAppSelector, useAppDispatch } from 'modules/Flux/store';

function PageContent() {
  const dispatch = useAppDispatch();
  const counterStateValue = useAppSelector((state) => state.counterReducer.value);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-semibold">Flux – Redux</h1>
      <div className="flex flex-row mt-8">
        <Counter
          count={counterStateValue}
          onIncrement={() => dispatch(incrementCounterAction())}
          onDecrement={() => dispatch(decrementCounterAction())}
        />
      </div>
    </div>
  );
}
export default PageContent;
