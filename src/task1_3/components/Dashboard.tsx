import { useState, useEffect } from "react";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const worker = new Worker(
      new URL("../workers/calculation.worker.ts", import.meta.url),
      { type: "module" }
    );

    worker.onmessage = (e: MessageEvent<number>) => {
      setD(e.data);
      setIsLoading(false);
      worker.terminate();
    };

    worker.postMessage("start");

    return () => worker.terminate();
  }, []);

  return (
    <main className="w-full max-w-3xl mx-auto px-4 py-8 bg-slate-100 min-h-[calc(100vh-4rem)]">
      <h1 className="text-2xl font-bold mb-6 text-slate-800">Dashboard</h1>
      <div className="bg-white rounded-lg shadow-md w-full">
        <div className="p-8 min-h-[120px] flex items-center justify-center">
          <div className="w-full max-w-md min-w-[25rem] mx-auto text-center">
            {isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <div className="animate-spin h-6 w-6 border-3 border-blue-500 border-t-transparent rounded-full"></div>
                <span className="text-lg text-slate-700">Calculating...</span>
              </div>
            ) : (
              <div className="text-xl">
                <span className="font-semibold text-slate-700">Result: </span>
                <span className="text-blue-600 font-mono block mt-2">
                  {d?.toLocaleString()}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
