import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <h1 className="text-6xl font-bold text-white mb-8">{count}</h1>

      <div className="space-x-4">
        <button
          onClick={Increment}
          className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-400 transition duration-300"
        >
          +
        </button>

        <button
          onClick={Decrement}
          className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-400 transition duration-300"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;
