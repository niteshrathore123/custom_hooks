import useCounter from "./useCounter";

const AgeCounter = () => {
  const [count, increment, decrement] = useCounter(0, 1);
  return (
    <>
      <button onClick={increment}>Increment</button>
      <div>Age: {count}</div>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};
export default AgeCounter;
