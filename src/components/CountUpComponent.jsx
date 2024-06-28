import React from "react";
import CountUp from "react-countup";

function CountUpComponent() {
  return (
    <div className="flex flex-col items-center justify-center mt-3">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        <CountUp end={1000} duration={5} />
      </h1>
      <h2 className="text-2xl font-semibold text-green-500">
        <CountUp
          start={0}
          end={100}
          duration={3}
          prefix="$"
          suffix="K"
          separator=","
        />
      </h2>
    </div>
  );
}

export default CountUpComponent;
