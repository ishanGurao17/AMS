import { useState } from "react";

const Dashboard = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <div>Hi This is Dashboard</div>
      <button onClick={() => setCounter(counter + 1)}>
        Click to increase count: {counter}
      </button>
    </>
  );
};

export default Dashboard;
