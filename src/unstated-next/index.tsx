import React from 'react';
import { createContainer } from 'unstated-next';

import useCounter from './counter';

const Counter = createContainer(useCounter);


function CounterDisplay() {
  let counter = Counter.useContainer()
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  )
}

const CounterShow = () => {
  const { count } = Counter.useContainer()
  return <>{count}</>;
};

function UnstatedNext() {
  // let counter = Counter.useContainer()
  return (
    <Counter.Provider initialState={100}>
      <h1>unstated-next state manage</h1>
      <CounterDisplay />
      <CounterShow />
    </Counter.Provider>
  )
}

export default UnstatedNext;