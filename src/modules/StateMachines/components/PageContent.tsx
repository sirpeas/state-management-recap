import { useMachine } from '@xstate/react';
import { createBrowserInspector } from '@statelyai/inspect';

import { Counter } from 'modules/common/components/Counter';
import { countMachine } from 'modules/StateMachines/store/CountMachine';

const { inspect } = createBrowserInspector({
  // INFO: Uncomment to enable inspector or visit https://stately.ai/registry/inspect
  autoStart: false,
});

function PageContent() {
  const [snapshot, send] = useMachine(countMachine, { inspect })

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
