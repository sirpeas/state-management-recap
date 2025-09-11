import { createMachine, assign, createActor } from 'xstate';

export const countMachine = createMachine({
  id: 'counter',
  context: {
    value: 0,
  },
  on: {
    increment: {
      actions: assign({
        value: ({ context }) => context.value + 1,
      }),
    },
    decrement: {
      actions: assign({
        value: ({ context }) => context.value - 1,
      }),
    },
  },
});

export const counterActor = createActor(countMachine);
counterActor.start();

