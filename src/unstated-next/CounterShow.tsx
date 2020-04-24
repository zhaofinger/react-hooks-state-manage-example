import React from 'react';
import Counter from './counter';

const CounterShow: React.FC = () => {
  const { count } = Counter.useContainer();
  return <>{count}</>;
};

export default CounterShow;