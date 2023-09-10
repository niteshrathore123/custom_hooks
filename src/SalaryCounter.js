import useCounter from "./useCounter";

const SalaryCounter = () => {
  const [count, increment, decrement] = useCounter(10000, 1000);
  return (
    <>
      <button onClick={increment}>Increment</button>
      <div>Salary: {count}</div>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};
export default SalaryCounter;
