import { Counter } from 'modules/common/components/Counter';
import counterStore from 'modules/Observable/store/Counter';
import { observer } from 'mobx-react-lite';

const PageContent = observer(() => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-semibold">Observable – MobX</h1>
      <div className="flex flex-row mt-8">
        <Counter
          count={counterStore.value}
          onIncrement={() => counterStore.increment()}
          onDecrement={() => counterStore.decrement()}
        />
      </div>
    </div>
  );
});
PageContent.displayName = 'PageContent';

export default PageContent;
