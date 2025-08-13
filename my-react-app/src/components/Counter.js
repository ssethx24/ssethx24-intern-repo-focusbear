import React, { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-200 p-6">
          <h1 className="text-lg font-semibold text-slate-800">Counter</h1>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-5xl font-bold leading-none text-slate-900">
              {count}
            </span>
            <span className="text-sm text-slate-500">clicks</span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <Button
              variant="secondary"
              onClick={() => setCount((c) => Math.max(0, c - 1))}
              aria-label="Decrement"
            >
              – Decrement
            </Button>

            <Button onClick={() => setCount((c) => c + 1)} aria-label="Increment">
              + Increment
            </Button>

            <Button
              className="col-span-2"
              variant="danger"
              onClick={() => setCount(0)}
              aria-label="Reset counter"
            >
              Reset
            </Button>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Tip: try keyboard navigation—notice the focus ring.
          </p>
        </div>
      </div>
    </div>
  );
}
