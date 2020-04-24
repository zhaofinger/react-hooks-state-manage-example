import React  from 'react';
import Counter from './counter';

const [CounterProvider, useCounterContext] = Counter;

function CounterDisplay() {
  const { count, increment, decrement } = useCounterContext();
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

const CounterShow = () => {
  const { count } = useCounterContext();
  return <>{count}</>;
};

function ConstateStateManage() {
  // 5️⃣ Wrap your components with Provider
  return (
    <CounterProvider initState={999}>
      <h1>constate state manage</h1>
      <CounterDisplay />
      <CounterShow />
    </CounterProvider>
  );
}

export default ConstateStateManage;