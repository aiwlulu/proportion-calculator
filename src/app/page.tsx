"use client";

import { useState } from "react";
import InputField from "../components/InputField";

export default function ProportionCalculator() {
  const [a, setA] = useState<number | null>(4);
  const [b, setB] = useState<number | null>(3);
  const [c, setC] = useState<number | null>(1200);
  const [d, setD] = useState<number | null>(null);

  const calculateProportion = () => {
    try {
      if ([a, b, c, d].filter((val) => val !== null).length === 3) {
        if (a && b && c) setD((b * c) / a);
        else if (a && b && d) setC((a * d) / b);
        else if (a && c && d) setB((a * d) / c);
        else if (b && c && d) setA((b * c) / d);
      }
    } catch (error) {
      console.error("Error in calculation:", error);
    }
  };

  const resetFields = () => {
    setA(null);
    setB(null);
    setC(null);
    setD(null);
  };

  const isCalculateDisabled = !(
    [a, b, c, d].filter((val) => val !== null).length === 3
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-dark text-white">
      <div className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-primary mb-6">
          Proportion Calculator
        </h1>
        <p className="text-center text-sm text-gray-400 mb-6">
          Enter any three values and click Calculate to compute the fourth.
        </p>
        <div className="flex items-center justify-between space-x-4 mb-3">
          <InputField id="a" label="A" value={a ?? ""} onChange={setA} />
          <InputField id="b" label="B" value={b ?? ""} onChange={setB} />
        </div>
        <div className="flex items-center justify-center my-2">
          <p className="text-2xl font-bold text-primary">=</p>
        </div>
        <div className="flex items-center justify-between space-x-4">
          <InputField id="c" label="C" value={c ?? ""} onChange={setC} />
          <InputField id="d" label="D" value={d ?? ""} onChange={setD} />
        </div>
        <div className="flex space-x-4 mt-6">
          <button
            onClick={calculateProportion}
            disabled={isCalculateDisabled}
            className={`flex-1 px-4 py-2 rounded-lg focus:outline-none transition-all duration-200 ${
              isCalculateDisabled
                ? "bg-gray-500 text-gray-300 cursor-not-allowed opacity-70"
                : "bg-primary text-white hover:bg-primary-dark focus:ring-4 focus:ring-primary-light shadow-md hover:shadow-lg transform hover:scale-105"
            }`}
          >
            {isCalculateDisabled ? "Fill 3 Values" : "Calculate"}
          </button>
          <button
            onClick={resetFields}
            className="flex-1 px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-400 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
