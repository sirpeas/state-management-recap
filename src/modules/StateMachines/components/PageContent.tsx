import { useMachine } from '@xstate/react';

import { Counter } from 'modules/common/components/Counter';
import { countMachine } from 'modules/StateMachines/store/CountMachine';

function PageContent() {
  const [snapshot, send] = useMachine(countMachine)

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-semibold">State Machines – XState</h1>
      <div className="flex flex-row mt-8">
        <Counter
          count={snapshot?.context.value}
          onIncrement={() => send({ type: 'increment'})}
          onDecrement={() => send({ type: 'decrement'})}
        />
      </div>
    </div>
  );
}
export default PageContent;
