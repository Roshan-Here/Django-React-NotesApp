import React, { useState } from "react";


function Count({onDelete,value,Ccntr,Counthandle}) {
  // console.log(Ccntr[0].value)
  const thalaforreason = () => {
    if (value === 0) {
      return "Zero";
    } else if (value === 7) {
      return "Thala For a Reason";
    } else {
      return value;
    }
  };
  return (
    <div>
      <h4 className="m-2 text-semibold text-red-800">{value}</h4>
      <button
        onClick={() => Counthandle()}
        className="m-2 w-40 h-20 text-white bg-cyan-700"
        type="button"
      >
        {thalaforreason()}
      </button>
      <button onClick={()=>onDelete(Ccntr.id)} className="m-2 w-40 h-20 text-red-900 bg-blue-300">Delete</button>
    </div>
  );
}

export default Count;
