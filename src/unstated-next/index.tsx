import React from 'react';
import Counter from './counter';
import CounterDisplay from './CounterDisplay';
import CounterShow from './CounterShow';

// page
function UnstatedNext() {
  // let counter = Counter.useContainer()
  return (
    <Counter.Provider initialState={100000}>
      <h1>unstated-next state manage</h1>
      <CounterDisplay />
      <CounterShow />
    </Counter.Provider>
  )
}

export default UnstatedNext;