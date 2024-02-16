import Counters from "../components/Counters";
import Navbar from "../components/Navbar";
import React, { useState } from "react";

function Home() {
  const [counters, setCounters] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  const counthandle = (counter) => {
    const updatedCounter = counters.map((c) => {
      if (c.id === counter.id) {
        return { ...c, value: c.value + 1 };
      }
      return c;
    });
    setCounters(updatedCounter);
  };

  const handleDelete = (counters, counterId) => {
    const remainingC = counters.filter((m) => m.id !== counterId);
    return remainingC; // ==> back to onnDelete
    // console.log("Event...",counterId);
  };
  const onnDelete = (counterId) => {
    const updatedC = handleDelete(counters, counterId); // ==> handleDelete
    setCounters(updatedC);
  };
  const handleReset = () => {
    const newcc = counters.map((m) => {
      m.value = 0;
      return m;
    });
    setCounters(newcc);
  };
  return (
    <div>
      <Navbar totalCounters={counters.filter((c) => c.value > 0).length} />
      <Counters
        counters={counters}
        onReset={handleReset}
        onDelete={onnDelete}
        onIncrement={counthandle}
      />
    </div>
  );
}

export default Home;
