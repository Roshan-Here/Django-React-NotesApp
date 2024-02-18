import { useEffect } from "react";
import Count from "./Count";


function Counters({counters,onReset,onDelete,onIncrement,onDecrement}) {
  // console.log(counters)
  return (
    <div className="m-20">
      <button
        onClick={() => onReset()}
        className="w-20 h-10 bg-blue-400 font-extrabold text-red-800"
      >
        Reset !
      </button>
      {counters.map((ccc) => (
        <Count
          key={ccc.id}
          onDelete={() => onDelete(ccc.id)}
          value={ccc.value}
          id={ccc.id}
          Ccntr = {counters}
          Counthandle = {()=>onIncrement(ccc)}
          onDecrement = {()=>onDecrement(ccc)}
        ></Count>
      ))}
    </div>
  );
}

export default Counters;
